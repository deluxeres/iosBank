import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Card() {
  return (
    <View>
        <View style={styles.card}>
            <Text>1</Text>
        </View>
        <View style={styles.card}>
             <Text>2</Text>
        </View>
        <View style={styles.card}>
            <Text>3</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        width: "2300%",
        height: "100%",
        backgroundColor: 'blue',
        borderRadius: "30%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
