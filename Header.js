import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '25%',
        color: '#fff',
      }
})
