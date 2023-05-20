import React, { ReactNode } from 'react'

import { StyleSheet, Text } from 'react-native'
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'

import { Colors } from '../../../constants/colors'

export const InstructionText = ({ children, style }: InstructionTextPropsType) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

type InstructionTextPropsType = {
  children: ReactNode
  style?: StyleProp<TextStyle>
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
})
