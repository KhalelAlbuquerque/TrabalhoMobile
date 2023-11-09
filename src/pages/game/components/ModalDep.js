import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Modal } from 'react-native';
import { ModalMessage } from './ModalMessage';
import React, { useState } from 'react';

export function ModalDep({balance,setBalance,setModalDep}) {

    const [adcBalance, setAdcBalance] = useState('')
    const [modalMessage, setModalMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    function sendMessage(type, message){
        setType(type)
        setMessage(message)
        setModalMessage(true)
    }

    function handleClick () {
        if(isNaN(adcBalance)){
            sendMessage('warning', 'Digite um valor válido pra depósito')
            return
        }
        if(adcBalance.includes(',')){
            sendMessage('warning', "Digite um número sem virgulas pra deposito (use ponto)")
            return
        }
        const novoValor = parseFloat(adcBalance).toFixed(2)
        if((parseFloat(balance) + parseFloat(novoValor)>1000)){
            sendMessage('warning', 'Saldo maximo na plataforma: R$ 1000')
            return
        }else if(isNaN(novoValor) || novoValor == 0){
            sendMessage('warning', 'Digite um valor válido pra deposito')
            return
        }
        setBalance((parseFloat(balance) + parseFloat(adcBalance)).toFixed(2))
        sendMessage('success', 'Depósito realizado!')
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
                <TouchableOpacity onPress={handleClick} style={styles.buttonContainer}>
                    <Text style={{color:'white', fontSize: 16, fontWeight: 'bold'}}>Confirmar Despósito</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={modalMessage} animationType='fade' transparent={true}>
                <ModalMessage setModalMessage={setModalMessage} type={type} message={message} setModal={setModalDep}/>
            </Modal>
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
        fontSize: 32,
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
