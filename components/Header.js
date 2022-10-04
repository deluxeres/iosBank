import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, Linking, TextInput } from 'react-native';
import Profile from './Profile'

export default function Header() {

  return (
    <View style={styles.header}>
        <View style={styles.headerContainer}>
                <View style={styles.logotype}>
                    <Image
                        style={styles.logoImage}
                        source={{url: 'http://logo-logos.com/2016/11/Bank_Australia_logo.png'}}
                    />
                </View>
        </View>
        <Profile />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '6%',
        marginBottom: '20%',
        marginTop: '13%'
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    logotype: {
        width: '50%',
        height: '100%'
    },
    logoImage: {
        width: '100%',
        height: '100%'
    },
    profile: {
        marginTop: "10%",
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
})
