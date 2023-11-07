import Slider from '@react-native-community/slider';
import React  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';

export function ModalComoFunciona({setModalComoFunciona}){
    return(
        <View style={styles.blurBG}>
            <View style={styles.infosContainer}>
                <View>
                    <TouchableOpacity onPress={() => setModalComoFunciona(false)} >
                        <Text style={styles.closeButton}>X</Text>
                    </TouchableOpacity>
                </View>
            
                <View style={styles.howToContainer}>
                    <Image style={{height: 40, width: 40}} source={require('../../../public/img/graph.png')}></Image>
                    <Text style={styles.howToTitle}>Como funciona</Text>
                </View>
                <View style={styles.howToDescContainer}>
                    <Text style={{marginTop:20, fontSize:16, textAlign:'justify'}}>
                        Após escolhido o número do dado, o valor da aposta e clicado o botão "Apostar",
                        o dado que está abaixo do seu saldo irá rolar uma vez, e depois disso, o resultado
                        dizendo se você ganhou ou perdeu aparecerá na tela.
                    </Text>
                    <Text style={{marginTop:20, fontSize:16, textAlign:'justify'}}>
                        Lembrando que, se o número sorteado for maior do que o número em que você apostou,
                        <Text style={{color: 'green', fontWeight:'bold' }}> você ganha</Text>, caso contrário, <Text style={{color: 'red', fontWeight:'bold' }}>você perde</Text>!
                    </Text>
                </View>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    blurBG:{
        height:'100%',
        width: '100%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',
        backgroundColor: 'rgba(0,0,0,.6)',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    closeButton: {
        position: 'absolute',
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft:15,
        marginTop:15
    },
    infosContainer:{
        height:450,
        width: '90%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',
        backgroundColor: '#D9D9D9',
        borderRadius:10,
    },
    howToContainer:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 5,
        marginTop: 35,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap:10
    },
    howToTitle:{        
        color: 'black',
        fontSize: 32,
        fontWeight:'bold',            
    },
    howToDescContainer:{
        width:'80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    howToDesc:{
        color: 'white',
        width: '100%',
        textAlign:'center',
        marginBottom: 2,
        fontSize: 14
    },
    lastContainer:{
        marginBottom: 130,
        height: 160
    },
    buttonContainer:{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:50,
        marginTop: 10,
        display:'flex',
        justifyContent:'center',
        borderRadius: 5,
        backgroundColor:'#BD0000'
    }
})