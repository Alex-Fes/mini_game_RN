import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { Colors } from '../../../constants/colors'

export const NumberContainer = ({ children }: NumberContainerPropsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

type NumberContainerPropsType = {
  children: number
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 36,
  },
})
