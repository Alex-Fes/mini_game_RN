import React, { useEffect, useState } from 'react'

import { Alert, StyleSheet, View } from 'react-native'

import { NumberContainer } from '../components/game/NumberContainer'
import { Card } from '../components/ui/Card'
import { InstructionText } from '../components/ui/InstructionText'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { Title } from '../components/ui/Title'

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

let minBoundary = 1
let maxBoundary = 100

export const GameScreen = ({ userNumber, onGameOver }: GameScreenPropsType) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])
  function nextGuessHandler(direction: string) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert(`Don't lie!`, `You know that this is wrong...`, [
        { text: 'Sorry!', style: 'cancel' },
      ])

      return
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)

    setCurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.screen}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
      </Card>
    </View>
  )
}

type generateRandomBetweenType = {
  min: number
  max: number
  exclude: number
}

type GameScreenPropsType = {
  userNumber: number
  onGameOver: () => void
}

type nextGuessHandlerType = {
  direction: string
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 34,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})
