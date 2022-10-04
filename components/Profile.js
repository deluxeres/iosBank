import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, Linking, TextInput } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.profile}>
        <View style={styles.profileContainer}>
            <View style={styles.balance}>
                <Text>Balance</Text>
                <Text style={styles.balanceSum}>$ 10,000</Text>
            </View>
            <View style={styles.input}>
                <TextInput placeholder="search" />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    profile: {
        marginTop: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '100%',
        // height: "30%"
    },
    balanceSum: {
        fontSize: "18",
        fontWeight: "600",
    },
    profileContainer: {
        paddingLeft: "5%",
        paddingRight: "5%",
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
})
