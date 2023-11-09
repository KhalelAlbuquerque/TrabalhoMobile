import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { ModalMessage } from './ModalMessage';

export function ModalSaq({ balance, setBalance, setModalSaq }) {

    const [removeBalance, setRemoveBalance] = useState('')
    const [modalMessage, setModalMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    function sendMessage(type, message){
        setType(type)
        setMessage(message)
        setModalMessage(true)
    }


    function handleClick() {
        if(isNaN(removeBalance)){
            sendMessage('warning', 'Digite um valor válido pra saque')
            return
        }
        if(removeBalance.includes(',')){
            sendMessage('warning', 'Digite um número sem vírgulas pra saque (use ponto)')
            return
        }
        const novoValor = parseFloat(removeBalance).toFixed(2)
        if((parseFloat(balance) - parseFloat(novoValor)<0)){
            sendMessage('warning', 'Saldo insuficiente pra saque')
            return
        }else if(isNaN(novoValor) || novoValor == 0){
            sendMessage('warning', 'Digite um valor válido pra saque')
            return
        }
        sendMessage('success', 'Saque realizado!')
        setBalance(parseFloat(balance) - parseFloat(novoValor))
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.closeButtonContainer}>
                    <TouchableOpacity onPress={() => setModalSaq(false)} >
                        <Text style={styles.closeButton}>X</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    Sacar
                </Text>
                <TextInput
                    style={styles.TextInput}
                    value={removeBalance.toString()}
                    placeholder="Digite um valor que queira sacar"
                    onChangeText={(text) => {
                        if (text.charAt(0) === '0') {
                            text = text.substring(1)
                        }
                        setRemoveBalance(text);
                    }}
                    keyboardType="numeric"
                    placeholderTextColor="gray"
                    color="black"
                    onSubmitEditing={handleClick}
                />
                <TouchableOpacity onPress={handleClick} style={styles.buttonContainer}>
                    <Text style={{color:'white', fontSize: 16, fontWeight: 'bold'}}>Confirmar Saque</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={modalMessage} animationType='fade' transparent={true}>
                <ModalMessage setModalMessage={setModalMessage} type={type} message={message} setModal={setModalSaq}/>
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
        width: '80%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#BD0000',
        borderRadius: 10
    }
})
