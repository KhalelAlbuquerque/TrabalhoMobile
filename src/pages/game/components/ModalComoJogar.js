import Slider from '@react-native-community/slider';
import React  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

export function ModalComoJogar({setModalComoJogar}){
    return(
        <View style={styles.blurBG}>
            <View style={styles.infosContainer}>
                <View>
                    <TouchableOpacity onPress={() => setModalComoJogar(false)} >
                        <Text style={styles.closeButton}>X</Text>
                    </TouchableOpacity>
                </View>
            
                <Text style={styles.howToTitle}>Como jogar</Text>
                <View style={styles.howToDescContainer}>
                    <View style={{textAlign:'center', marginBottom:20, marginTop:20}}>
                        <Text style={{ fontSize: '16rem'}}>Coloque o valor que deseja apostar no campo de "Faça sua aposta".</Text>
                        <View style={{marginTop: 10, width: '100%'}}>
                            <Text style={{fontSize:'16rem', fontWeight: 'bold'}}>Faça sua aposta:</Text>
                            <View style={{backgroundColor:'white', width:'100%', padding: 10, boxSizing: 'borderbox', borderRadius:5}}>
                                <Text>Digite o valor da aposta...</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop:20}}>
                        <Text style={{ fontSize: '16rem'}}>Após isso, deslize a barra escolhendo o valor do dado que deseja apostar.</Text>
                        <View>
                            <Slider 
                                minimumValue={1}
                                maximumValue={100}
                                step={0}
                                maximumTrackTintColor='green'
                                minimumTrackTintColor='red'
                                value={50}
                            />
                        </View>
                    </View>
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
        fontSize: 24,
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
    howToTitle:{        
        color: 'black',
        fontSize: 32,
        fontWeight:'bold',            
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 5,
        marginTop: 5
    },
    howToDescContainer:{
        width:'80%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
    }
})