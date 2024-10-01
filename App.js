import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import ListaTareas from "./componentes/ListaTareas/ListaTareas.js";


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <Text style={styles.h1}>Tareas pendientes!</Text>
            <ListaTareas/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
        color: 'whitesmoke',
    },
});
