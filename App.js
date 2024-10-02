import {StatusBar} from 'expo-status-bar'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import ListaTareas from "./componentes/ListaTareas/ListaTareas.js"
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <LinearGradient colors={['#7afcff', 'salmon']} style={styles.gradient}>
                <Text style={styles.h1}>Tareas pendientes!</Text>
                <ListaTareas/>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
        color: 'black',
    },
})