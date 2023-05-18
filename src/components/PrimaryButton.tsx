import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export const PrimaryButton = (props: PrimaryButtonProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})

type PrimaryButtonProps = {
  children: string
}
