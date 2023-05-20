import React, { ReactNode } from 'react'

import { View, Text, StyleSheet, Pressable } from 'react-native'

import { Colors } from '../../../constants/colors'

export const PrimaryButton = (props: PrimaryButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  )
}

type PrimaryButtonProps = {
  children: ReactNode
  onPress?: () => void
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 2,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
})
