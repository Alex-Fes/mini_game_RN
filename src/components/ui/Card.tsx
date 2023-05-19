import React, { ReactNode } from 'react'

import { StyleSheet, View } from 'react-native'

import { Colors } from '../../../constants/colors'

export const Card = ({ children }: CardPropsType) => {
  return <View style={styles.card}>{children}</View>
}

type CardPropsType = {
  children: ReactNode
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary700,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8, //shadow is only for android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    shadowOpacity: 0.25,
  },
})
