import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import CheckBox from 'expo-checkbox';

export default function App() {
    const [days, setDays] = useState([
        {day: 'Lunes', checked: false},
        {day: 'Martes', checked: false},
        {day: 'Miércoles', checked: false},
        {day: 'Jueves', checked: false},
        {day: 'Viernes', checked: false},
        {day: 'Sábado', checked: false},
        {day: 'Domingo', checked: false},
    ]);

    const toggleCheck = (index) => {
        const newDays = [...days];
        newDays[index].checked = !newDays[index].checked;
        setDays(newDays);
    };

    const allChecked = days.every(day => day.checked);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <Text style={styles.titulo}>TO-DO LIST:</Text>
            <View style={styles.list}>
                {days.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <CheckBox
                            value={item.checked}
                            onValueChange={() => toggleCheck(index)}
                        ></CheckBox>
                        <Text style={styles.texto}>{item.day}</Text>
                    </View>
                ))}
            </View>
            {allChecked && <Text style={styles.completado}>Todo completado</Text>}
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
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
        color: 'whitesmoke',
    },
    list: {
        gap: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
        color: 'whitesmoke',
        marginLeft: 10,
    },
    completado: {
        fontSize: 25,
        color: 'lime',
        marginTop: 20,
    },
});
