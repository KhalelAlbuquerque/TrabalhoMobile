import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export function ModalDep({balance,setBalance,setModalDep}) {

    const [adcBalance, setAdcBalance] = useState('')

    function handleClick () {
        if(isNaN(adcBalance)){
            alert("Digite um valor válido pra deposito")
            return
        }
        if(adcBalance.includes(',')){
            alert("Digite um número sem virgulas pra deposito (use ponto)")
            return
        }
        const novoValor = parseFloat(adcBalance).toFixed(2)
        if((parseFloat(balance) + parseFloat(novoValor)>1000)){
            alert("Saldo maximo na plataforma: R$ 1000")
            return
        }else if(isNaN(novoValor) || novoValor == 0){
            alert("Digite um valor válido pra deposito")
            return
        }
        setModalDep(false)
        setBalance(parseFloat(balance) + parseFloat(adcBalance))
        alert("Deposito realizado!")
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.closeButtonContainer}>
                    <TouchableOpacity onPress={() => setModalDep(false)} >
                        <Text style={styles.closeButton}>X</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    Depositar
                </Text>
                <View></View>
                <TextInput
                    style={styles.TextInput}
                    value={adcBalance.toString()}
                    placeholder="Digite o valor do depósito"
                    onChangeText={(text) => {
                        if (text.charAt(0) === '0') {
                            text = text.substring(1)
                        }
                        setAdcBalance(text);
                    }}
                    keyboardType="numeric"
                    placeholderTextColor="gray"
                    onSubmitEditing={handleClick}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title='Confirmar depósito'
                        onPress={handleClick}
                        color={'white'}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
    },
    TextInput: {
        color:'#222',
        fontWeight:'bold',
        padding: 10,
        width: "80%",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 30,
        backgroundColor:'#ddd',
        borderColor:'transparent',
        height:60,
        fontSize:16
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 10,
        left: 10
    },
    closeButton: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttonContainer:{
        backgroundColor: '#BD0000',
        width:"80%",
        borderRadius: 10,
        height: 50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
})
