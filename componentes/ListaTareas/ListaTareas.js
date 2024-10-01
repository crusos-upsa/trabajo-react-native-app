import {useEffect, useState} from "react"
import {Button, StyleSheet, Text, TextInput, View} from "react-native"
import CheckBox from "expo-checkbox"
import {TAREAS_EJEMPLO} from "../../constantes.js";
import {alternarTarea, comprobarTareasCompletas} from "./logica.js";

export default function ListaTareas() {
    const [tareas, setTareas] = useState(TAREAS_EJEMPLO)
    const [todoCompleto, setTodoCompleto] = useState(false)
    const [nuevaTarea, setNuevaTarea] = useState('')

    useEffect(() => {
        const todasTareasCompletas = comprobarTareasCompletas(tareas)
        setTodoCompleto(todasTareasCompletas)
    }, [tareas])
    
    

    const gestionarClickEnTarea = (id) => {
        const nuevaListaTareas = alternarTarea(tareas,id)
        setTareas(nuevaListaTareas)
    }

    const crearTarea = () => {
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

    const reiniciarLista = () => {
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
        </>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        color: 'whitesmoke',
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
})
