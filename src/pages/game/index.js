import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';

export function Game() {
    const [balance,setBalance] = useState(0);
    const [aposta, setAposta] = useState('');
    const [size, setSize] = useState(50);
    const [multiplicador, setMultiplicador] = useState(1.98);
    const [win, setWin] = useState(50);
    const [lucro, setLucro] = useState(null);

    function calculateMultiplicador(value) {
        return (99 / (100 - value)).toFixed(4);
    }

    function ChanceDeGanhar(value) {
        return 100 - value;
    }

    function handleChange(value) {
        setSize(value.toFixed(0));
        const novoMultiplicador = calculateMultiplicador(value);
        setMultiplicador(novoMultiplicador);
        setWin(ChanceDeGanhar(value).toFixed(2));
    }

    function handlePress() {
        if (aposta) {
            const valorNumerico = parseFloat(aposta);
            const lucroAposta = (valorNumerico * multiplicador) - valorNumerico;
            setLucro(lucroAposta.toFixed(2));
        }
    }


    function fazerAposta() {
        if (aposta) {
                const numeroAleatorio = Math.random() * 100;
            if (numeroAleatorio > size) {
                alert(`Ganhou! Valor que recebeu: ${(aposta * multiplicador).toFixed(2)} Número sorteado: ${ + numeroAleatorio} + `);
            } else {
                alert('Perdeu! ' + `Número sorteado: ${ + numeroAleatorio}`);
            }
        } else {
            alert('Digite um valor para apostar');
        }
    }

    useEffect(() => {
        if (aposta === '') {
            setLucro(null);
        } else {
            handlePress();
        }
    }, [aposta, multiplicador]);

    return (
        <View style={styles.containerAll}>
            <View style={styles.container}>
                <View style={styles.range}>
                    <View style={styles.valueContainer}><Text style={styles.valueText}>0</Text></View>
                    <View style={[styles.valueContainer, styles.entrygap1]}><Text style={styles.valueText}>25</Text></View>
                    <View style={styles.valueContainer}><Text style={styles.valueText}>50</Text></View>
                    <View style={[styles.valueContainer, styles.entrygap2]}><Text style={styles.valueText}>75</Text></View>
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

            <View style={{ width: '100%', backgroundColor: '#fdfd', paddingHorizontal: 20 }}>
                <View style={styles.apostaEntry}>
                    <Text>Valor da Aposta</Text>
                    <Text> US$ {+aposta}</Text>
                </View>
                <View>
                    <TextInput
                        value={aposta.toString()}
                        placeholder="Valor para apostar"
                        style={styles.inputAposta}
                        onChangeText={(text) => setAposta(text)}
                        keyboardType="numeric"
                    />
                </View>
                <Button title="Apostar" onPress={fazerAposta} />
            </View>
            <View style={{ width: '100%', backgroundColor: '#fdfd', paddingHorizontal: 20 }}>
                <Text style={styles.apostaEntry}>
                    Lucro na vitória
                </Text>
                <Text style={{backgroundColor: 'blue', padding: 10}}>
                    {lucro ? `US$ ${lucro}` : '0.00'}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    apostaEntry: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    entrygap2: {
        paddingLeft: 10,
    },
    valueContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    inputAposta: {
        width: '70%',
        backgroundColor: 'green',
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 20,
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
    operations: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerAll: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 80,
    },
    slider: {
        width: '100%',
    },
    spin: {
        height: 40,
        backgroundColor: '#fdfd',
        borderRadius: 50,
        paddingTop: 10,
    },
    container: {
        flex: 1,
        width: '90%',
        margin: 'auto',
        marginHorizontal: 20,
    },
    range: {
        flex: 1,
        width: '110%',
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
    containerAposta: {
        flex: 1,
        flexDirection: 'column',
        width: '110%',
    }
});

export default Game;
