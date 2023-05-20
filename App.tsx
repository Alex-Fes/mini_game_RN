import { useState } from 'react'

import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'

import { Colors } from './constants/colors'
import { GameOverScreen } from './src/screens/GameOverScreen'
import { GameScreen } from './src/screens/GameScreen'
import { StartGameScreen } from './src/screens/StartGameScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null)
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }
  const gameOverHandler = (numberOfRounds: number) => {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  const startNewGameHandler = () => {
    setUserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    )
  }

  return (
    <LinearGradient colors={[Colors.primary500, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
