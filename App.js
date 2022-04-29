import React from 'react';
import { StyleSheet, View } from 'react-native';
import MessagesView from './src/MessegesView'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 50,
    paddingTop: 30
  },
  messagesView:{
    width: 900,
  }
})

export default function App() {
  return (
      <View style={styles.background}>
        <MessagesView style={styles.messagesView} />
      </View>
  )
}