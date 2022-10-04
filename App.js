import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from "react"
import Header from './components/Header'
import Cards from './components/Cards'

export default function App() {

  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.container}>
        <Cards />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   width: '90%',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  app: {
    backgroundColor: '#ffffff',
    height: '100%',
    padding: '0%',
    margin: '0%'
  },
  container: {
    width: '100%',
    paddingLeft: "5%",
    paddingRight: "5%"
  }
});
