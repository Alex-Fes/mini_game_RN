import React from 'react'

import { StyleSheet, Text } from 'react-native'

export const Title = ({ children }: TitlePropsType) => {
  return <Text style={styles.title}>{children}</Text>
}

type TitlePropsType = {
  children: string
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    padding: 12,
  },
})
