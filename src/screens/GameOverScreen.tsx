import React from 'react'

import { View, Text, StyleSheet, Image } from 'react-native'

import { Colors } from '../../constants/colors'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { Title } from '../components/ui/Title'

export const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: GameOverScreenPropsType) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the
        number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

type GameOverScreenPropsType = {
  roundsNumber: number
  userNumber: number
  onStartNewGame: () => void
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
})
