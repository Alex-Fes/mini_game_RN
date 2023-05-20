import React, { useEffect, useState } from 'react'

import { Ionicons } from '@expo/vector-icons'
import { Alert, FlatList, StyleSheet, View } from 'react-native'

import { GuessLogItem } from '../components/game/GuessLogItem'
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
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])
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
    setGuessRounds(prevState => [newRndNumber, ...prevState])
  }

  const guessRoundsListLength = guessRounds.length

  return (
    <View style={styles.screen}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem guess={item} roundNumber={guessRoundsListLength - index} />
          )}
          keyExtractor={item => item.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

type GameScreenPropsType = {
  userNumber: number
  onGameOver: (numberOfRounds: number) => void
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 34,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
})
