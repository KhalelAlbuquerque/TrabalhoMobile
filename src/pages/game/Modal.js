import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

export function Modal({balance,setBalance}) {

    const [adcBalance, setAdcBalance] = useState(0)

    function handleClick () {
        setBalance(balance + adcBalance)
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Depositar
                </Text>
                <TextInput
                    value={adcBalance}
                    placeholder={adcBalance.toString()}
                    onChangeText={({target}) => setAdcBalance(target.value)}
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                />
                <TouchableOpacity>
                    <Button
                        title='Voltar'
                        onPress={handleClick}
                        color={'red'}
                    />
                </TouchableOpacity>
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
})
