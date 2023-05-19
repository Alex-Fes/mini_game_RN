import React, { useState } from 'react'

import { Alert, StyleSheet, TextInput, View } from 'react-native'

import { Colors } from '../../constants/colors'
import { Card } from '../components/ui/Card'
import { InstructionText } from '../components/ui/InstructionText'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { Title } from '../components/ui/Title'

export const StartGameScreen = (props: StartGameScreenPropsType) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText)
  }

  const resetInputHandler = () => {
    setEnteredNumber('')
  }
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has to be a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]) // alert

      return
    }
    props.onPickNumber(chosenNumber)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          // enablesReturnKeyAutomatically={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

type StartGameScreenPropsType = {
  onPickNumber: (pickedNumber: number) => void
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
