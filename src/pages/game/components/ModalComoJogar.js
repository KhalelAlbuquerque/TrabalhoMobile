import Slider from '@react-native-community/slider';
import React  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';

export function ModalComoJogar({setModalComoJogar}){
    return(
        <View style={styles.blurBG}>
            <View style={styles.infosContainer}>
                <View>
                    <TouchableOpacity onPress={() => setModalComoJogar(false)} >
                        <Text style={styles.closeButton}>X</Text>
                    </TouchableOpacity>
                </View>
            
                <View style={styles.howToContainer}>
                    <Image style={{height: 40, width: 40}} source={require('../../../public/img/control.png')}></Image>
                    <Text style={styles.howToTitle}>Como jogar</Text>
                </View>
                <View style={styles.howToDescContainer}>

                    <View style={{marginTop:10}}>
                        <Text style={{ fontSize: 16, marginBottom: 5}}>Deslize a barra escolhendo o valor do dado que deseja apostar.</Text>
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

                    <View style={{textAlign:'center', marginBottom:20, marginTop:10}}>
                        <Text style={{ fontSize: 16}}>Após isso, coloque o valor que deseja apostar no campo de "Valor da aposta".</Text>
                        <View style={{marginTop: 10, width: '100%'}}>
                            <Text style={{fontSize:16, fontWeight: 'bold', marginBottom: 5}}>Valor da aposta:</Text>
                            <View style={{backgroundColor:'white', width:'100%', padding: 10, boxSizing: 'borderbox', borderRadius:5}}>
                                <Text>Valor para apostar</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text>
                            Depois, aperte no botão de "Apostar" para completar sua aposta e aguardar o resultado
                        </Text>
                        <View style={styles.buttonContainer}>
                                <Button style={{borderRadius: 15}} color={'white'} title="Apostar" onPress={()=>{}} />
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