import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native' 
import Slider from '@react-native-community/slider'

export function Game () {


    const [value,setValue] = useState(5)
    const [size, setSize] = useState(50)
    const [multiplicador, setMultiplicador] = useState(1.98)
    const [win,setWin] = useState(50)

    function calculateMultiplicador(value) {
        return (99/(100-value)).toFixed(4)
    }

    function ChanceDeGanhar(value) {
        return 100 - value;
    }

    function handleChange(value) {
        setSize(value.toFixed(0))
        const novoMultiplicador = calculateMultiplicador(value);
        setMultiplicador(novoMultiplicador);
        setWin(ChanceDeGanhar(value).toFixed(2))
    }

    return (
        <View style={styles.containerAll}>
            <View style={styles.container}>
                <View style={styles.range}>
                    <View style={styles.valueContainer}><Text style={styles.valueText}>0</Text></View>
                    <View style={[styles.valueContainer,styles.gapentry]}><Text style={styles.valueText}>25</Text></View>
                    <View style={styles.valueContainer}><Text style={styles.valueText}>50</Text></View>
                    <View style={styles.valueContainer}><Text style={styles.valueText}>75</Text></View>
                    <View style={styles.valueContainer}><Text style={styles.valueText}>100</Text></View>
                </View>
                <View style={styles.spin}>
                    <Slider 
                        style={styles.slider}
                        minimumValue={2}
                        maximumValue={98}
                        step={1}
                        maximumTrackTintColor='green'
                        minimumTrackTintColor='red'
                        thumbTintColor='#000'
                        value={size}
                        onValueChange={handleChange}
                    />
                </View>
            </View>
            <View style={styles.containerFunctions}>
                <View styles={styles.operations}>
                    <Text aria-label="Label for Username" nativeID="labelUsername">Multiplicador</Text>
                    <Text style={styles.operadores}>{multiplicador}</Text>
                </View>
                <View>
                    <Text aria-label="Label for Username" nativeID="labelUsername">Rolar Acima</Text>
                    <Text style={styles.operadores}>{size}</Text>
                </View>
                <View>
                    <Text aria-label="Label for Username" nativeID="labelUsername">Chance de vitória</Text>
                    <Text style={styles.operadores}>{win}</Text>
                </View>
            </View>

            <View style={styles.containerAposta}>
                <View style={styles.Aposta}>
                    <Text>Valor da Aposta</Text>
                    <TextInput style={styles.inputAposta} aria-label="input" aria-labelledby="labelUsername" />
                </View>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    inputAposta: {
        backgroundColor: 'green',
    },
    Aposta: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        padding: 15,
        backgroundColor: '#fdfd', 
    },
    operadores: {
        padding: 10,
        backgroundColor: 'blue',
        color: '#fff',
        borderRadius: 3,
        height: 40,
        textAlign: 'center',
    },
    operations:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerAll: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 10,
    },
    slider: {
        paddingHorizontal: 20,
    },
    spin: {
        height: 40,
        backgroundColor: '#fdfd',
        borderRadius: 50,
    },
    container: {
        flex: 1,
        width: '90%',
        margin: 'auto',
    },
    range: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    containerFunctions: {
        width: '90%',
        marginBottom: 20,
        marginTop: 80,
        flex: 1,
        minHeight: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fdfd',
        marginHorizontal: 20,
        padding: 15,
    },
    gapentry: {
        paddingLeft: 7,
    },
    containerAposta: {
        flex: 1,
        flexDirection: 'column'
    }
})
