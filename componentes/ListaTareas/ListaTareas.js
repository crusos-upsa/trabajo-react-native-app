import {useEffect, useState} from "react"
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native"
import CheckBox from "expo-checkbox"
import {TAREAS_EJEMPLO} from "../../constantes.js";
import {alternarTareaCompletada, comprobarTareasCompletas} from "./logica.js";

export default function ListaTareas() {
    const [tareas, setTareas] = useState(TAREAS_EJEMPLO)
    const [todoCompleto, setTodoCompleto] = useState(false)
    const [nuevaTarea, setNuevaTarea] = useState('')

    useEffect(() => {
        const todasTareasCompletas = comprobarTareasCompletas(tareas)
        setTodoCompleto(todasTareasCompletas)
    }, [tareas])

    const gestionarClickEnTarea = (id) => {
        const nuevaListaTareas = alternarTareaCompletada(tareas, id)
        setTareas(nuevaListaTareas)
    }

    const crearNuevaTarea = () => {
        if (!nuevaTarea.trim()) {
            return
        }
        const nuevoObjetoTarea = {
            id: tareas.length + 1,
            text: nuevaTarea,
            checked: false,
        }
        const nuevaListaTareas = [...tareas, nuevoObjetoTarea]
        setTareas(nuevaListaTareas)
        setNuevaTarea('')
    }

    const reiniciarListaDeTareas = () => {
        setTareas(TAREAS_EJEMPLO)
    }

    return (
        <>
            <View style={styles.lista}>
                {tareas.map(tarea => (
                    <View key={tarea.id} style={styles.tarea}>
                        <CheckBox
                            value={tarea.checked}
                            onValueChange={() => gestionarClickEnTarea(tarea.id)}
                        />
                        <Text style={styles.texto}>{tarea.text}</Text>
                    </View>
                ))}
            </View>
            {todoCompleto && <Text style={styles.completo}>TAREAS COMPLETAS!</Text>}
            <View style={styles.crearTarea}>
                <TextInput style={styles.texto}
                           value={nuevaTarea}
                           onChangeText={setNuevaTarea}
                           placeholder="Comprar el pan..."
                />
                <Pressable
                    style={({pressed}) => [
                        styles.boton,
                        pressed && styles.botonPresionado
                    ]}
                    onPress={crearNuevaTarea}
                >
                    <Text style={styles.botonTexto}>Crear nueva tarea</Text>
                </Pressable>
            </View>
            <Pressable
                style={({pressed}) => [
                    styles.boton,
                    pressed && styles.botonPresionado
                ]}
                onPress={reiniciarListaDeTareas}
            >
                <Text style={styles.botonTexto}>Reiniciar lista</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
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
        color: 'darkblue',
        marginTop: 20,
        fontWeight: 'bold',
    },
    crearTarea: {
        backgroundColor: '#ffc0d4',
        width: 300,
        padding: 10,
        borderRadius: 10,
        margin: 20,
    },
    boton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    botonPresionado: {
        backgroundColor: 'darkblue',
    },
    botonTexto: {
        color: 'white',
        fontSize: 16,
    },
})