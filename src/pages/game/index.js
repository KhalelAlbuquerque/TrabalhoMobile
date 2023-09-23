import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native' 
import Slider from '@react-native-community/slider'

export function Game () {


    const [value,setValue] = useState(5)
    const [size, setSize] = useState(50)
    const [multiplicador, setMultiplicador] = useState(2)
    const [win,setWin] = useState(50)

    function calculateMultiplicador(value) {
        if (value <= 50) {
            return ((value * 0.02) + 1).toFixed(2);
        } else if (value > 50 && value <= 55) {
            return ((value * 0.03) + 1).toFixed(2);
        } else if (value > 55 && value <= 60) {
            return ((value * 0.04) + 1).toFixed(2); 
        } else if (value > 60 && value <= 65) {
            return ((value * 0.05) + 1).toFixed(2);
        } else if (value > 65 && value <= 70) {
            return ((value * 0.08) + 1).toFixed(2);
        } else if (value > 70 && value <= 75) {
            return ((value * 0.1) + 1).toFixed(2);
        } else if (value > 75 && value <= 80) {
            return ((value * 0.12) + 1).toFixed(2);
        } else if(value > 80 && value <= 85) {
            return ((value * 0.15) + 1).toFixed(2);
        } else if (value > 85 && value <= 90) {
            return ((value * 0.18) + 1).toFixed(2);
        } else if (value > 90 && value <= 95) {
            return ((value * 0.28) + 1).toFixed(2);
        } else if (value > 95 && value <= 100) {
            return ((value * 0.49) + 1).toFixed(2);
        }
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
                        minimumValue={1}
                        maximumValue={99}
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
        padding: 5,
        backgroundColor: 'blue',
        color: '#fff',
        borderRadius: 3,
        border: '1px solid black',
    },
    operations:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerAll: {
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
        marginBottom: 20,
        marginTop: 50,
        flex: 1,
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
        flexDirection: 'column',
    }
})
