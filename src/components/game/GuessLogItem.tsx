import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { Colors } from '../../../constants/colors'

export const GuessLogItem = ({ roundNumber, guess }: GuessLogItemPropsType) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

type GuessLogItemPropsType = {
  roundNumber: number
  guess: number
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary700,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
})
