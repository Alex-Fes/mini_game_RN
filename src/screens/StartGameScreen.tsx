import React from 'react'

import { View, Text, StyleSheet, TextInput } from 'react-native'

import { PrimaryButton } from '../components/PrimaryButton'

export const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />

      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    padding: 16,
    marginTop: 100,
    backgroundColor: '#72063c',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8, //shadow is only for android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    shadowOpacity: 0.25,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})
