import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';

export function ModalSaq({ balance, setBalance, setModalSaq }) {

    const [removeBalance, setRemoveBalance] = useState(0)

    function handleClick() {
        setModalSaq(false)
        const novoValor = parseFloat(removeBalance)
        setBalance(balance - novoValor)
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
                    onChangeText={(text) => setRemoveBalance(Number(text))}
                    keyboardType="numeric"
                    placeholderTextColor="gray"
                    color="black"
                    onSubmitEditing={handleClick}
                />
                <View>
                    <Button
                        title='Sacar'
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
