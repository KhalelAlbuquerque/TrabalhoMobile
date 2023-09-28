import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export function ModalDep({balance,setBalance,setModalDep}) {

    const [adcBalance, setAdcBalance] = useState(0)

    function handleClick () {
        setModalDep(false)
        setBalance(balance + adcBalance)
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
                <TextInput
                    style={styles.TextInput}
                    value={adcBalance.toString()}
                    placeholder="Digite um valor que queira depositar"
                    onChangeText={(text) => setAdcBalance(Number(text))}
                    keyboardType="numeric"
                    placeholderTextColor="gray"
                    onSubmitEditing={handleClick}
                />
                <View>
                    <Button
                        title='Depositar'
                        onPress={handleClick}
                        color={'red'}
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
        padding: 10,
        width: "70%",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 10,
        left: 10
    },
    closeButton: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})
