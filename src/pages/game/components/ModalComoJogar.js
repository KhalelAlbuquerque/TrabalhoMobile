import React  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
                    <Text style={styles.howToTitle}>Como jogar</Text>
                    <View style={styles.howToDescContainer}>
                        <Text style={styles.howToDesc}>Coloque o valor que deseja apostar no campo "Valor da aposta."</Text>
                        <Text style={styles.howToDesc}>Após isso, deslize a barra escolhendo o valor do dado que deseja apostar.</Text>
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
        backgroundColor: 'white',
        borderRadius:10,
    },
    howToContainer:{
        width: 350,
        height: 140,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#2C3673',
        borderRadius: 10,
        marginTop: 10
    },
    howToTitle:{        
        color: '#3DADF2',
        fontSize: 32,
        fontWeight:'bold',            
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 5,
        marginTop: 5
    },
    howToDescContainer:{
        width:'70%',
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