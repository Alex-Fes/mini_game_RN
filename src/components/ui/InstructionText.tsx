import React, { ReactNode } from 'react'

import { StyleSheet, Text } from 'react-native'

import { Colors } from '../../../constants/colors'

export const InstructionText = ({ children }: InstructionTextPropsType) => {
  return <Text style={styles.instructionText}>{children}</Text>
}

type InstructionTextPropsType = {
  children: ReactNode
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
})
