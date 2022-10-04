import React, {useState} from "react"
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Card from './Card'

export default function Cards() {
  return (
    <View style={styles.cards}>
        <View style={styles.wrapperContainer}>
            {/* <ScrollView horizontal={true} style={styles.wrapper}> */}
                <View style={styles.card}>
                    <View style={styles.cardContainer}>
                        <Image source={require("../assets/img/visa.png")} style={styles.cardImage} />
                        <Text>Salary</Text>
                        <Text style={styles.cardSum}>$ 2,300</Text>
                        <Text style={styles.cardNumber}>166 94 *** 4277</Text>
                    </View>
                </View>
                {/* <View style={styles.card2}>
                    <Text>2</Text>
                </View>
                <View style={styles.card3}>
                    <Text>3</Text>
                </View> */}
            {/* </ScrollView> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cards: {
        // display: 'flex',
        marginTop: "5%",
        width: "100%",
        height: "50%"
    },
    wrapperContainer: {
        // height: "60%",
        // width: '100%',
        // display: 'flex',
        // flexDirection: 'row',
        // width: '100%',
    },
    wrapper: {
        width: '100%',
    },
    card: {
        width: '100%',
        height: "100%",
        backgroundColor: 'lightblue',
        borderRadius: "30%",
        display: 'flex',
        flexDirection: 'column',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "10%",
    },
    cardSum: {
        fontSize: "19",
        fontWeight: "500",
        marginTop: "1%"
    },
    cardNumber: {
        marginTop: "12%"
    },
    // card2: {
    //     width: "1200%",
    //     height: "100%",
    //     backgroundColor: 'pink',
    //     borderRadius: "30%",
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // card3: {
    //     width: "1200%",
    //     height: "100%",
    //     backgroundColor: 'lightgreen',
    //     borderRadius: "30%",
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    cardImage: {
        width: "15%",
        height: "17%",
        marginBottom: "13%"
    }
})
