export const comprobarTareasCompletas = (tareas) => {
    return tareas.every(tarea => tarea.checked)
}

export const alternarTareaCompletada = (tareas, id) => {
    return tareas.map(tarea => {
        if (tarea.id === id) {
            return {
                ...tarea,
                checked: !tarea.checked,
            }
        }
        return tarea
    })
}