import {StatusBar} from 'expo-status-bar';
import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import CheckBox from 'expo-checkbox';

const TAREAS_EJEMPLO = [
    {
        id: 1,
        text: 'Tarea 1',
        checked: false,
    },
    {
        id: 2,
        text: 'Tarea 2',
        checked: false,
    },
    {
        id: 3,
        text: 'Tarea 3',
        checked: false,
    },
]

export default function App() {
    const [tareas, setTareas] = useState(TAREAS_EJEMPLO)
    const [todoCompleto, setTodoCompleto] = useState(false)
    const [nuevaTarea, setNuevaTarea] = useState('')

    useEffect(() => {
        setTodoCompleto(tareas.every(tarea => tarea.checked))
    }, [tareas]);

    const toggleTareaCompleta = (id) => {
        setTareas(tareas.map(tarea => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    checked: !tarea.checked,
                }
            }
            return tarea;
        }));
    }

    const crearTarea = () => {
        if (nuevaTarea.trim()) {
            setTareas([...tareas, {id: tareas.length + 1, text: nuevaTarea, checked: false}])
            setNuevaTarea('')
        }
    }

    const reiniciarLista = () => {
        setTareas(TAREAS_EJEMPLO)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <Text style={styles.h1}>Lista de cosas por hacer</Text>
            <View style={styles.lista}>
                {tareas.map(tarea => (
                    <View key={tarea.id} style={styles.tarea}>
                        <CheckBox
                            value={tarea.checked}
                            onValueChange={() => toggleTareaCompleta(tarea.id)}
                        />
                        <Text style={styles.texto}>{tarea.text}</Text>
                    </View>
                ))}
            </View>
            {todoCompleto && <Text style={styles.completo}>Todo completado</Text>}
            <View style={styles.crearTarea}>
                <TextInput
                    value={nuevaTarea}
                    onChangeText={setNuevaTarea}
                    placeholder="Comprar el pan..."
                />
                <Button title="Crear nueva tarea" onPress={crearTarea}/>
            </View>
            <Button title={"Reiniciar lista"} onPress={reiniciarLista}/>
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
    texto: {
        fontSize: 20,
        color: 'whitesmoke',
        marginLeft: 10,
    },

    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
        color: 'whitesmoke',
    },

    lista: {
        gap: 10,
    },
    tarea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    completo: {
        fontSize: 25,
        color: 'lime',
        marginTop: 20,
    },

    crearTarea: {
        backgroundColor: 'lightblue',
        width: '75%',
        padding: 10,
        borderRadius: 10,
        margin: 20,
    },
});
