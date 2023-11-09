import { View , Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

export function ModalResult({setModalResult, numeroSorteado, valorRecebido, winner}){

    function closeModal(){
        setModalResult(false)
    }


    return (
        <View style={styles.modelContainer}>
            {winner ? (
                <View style={styles.model}>
                    <View style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                        <Image style={{height: 80, width: 80}} source={require('../../../public/img/checked.png')}/>
                        <Text style={{fontSize:32, fontWeight: 'bold'}}>Você ganhou!</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={{fontWeight: 'bold', fontSize:16, textAlign: 'center'}}>Número sorteado: {numeroSorteado}</Text>
                        <Text style={{fontWeight: 'bold', fontSize:16, textAlign: 'center'}}>Valor recebido: <Text style={{color: 'green', fontSize: 20}}>R$ {valorRecebido}</Text></Text>
                    </View>
                    <TouchableOpacity onPress={closeModal} style={styles.confirmButton}>
                        <Text style={{color: 'white', fontSize:16, fontWeight:'bold'}}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.model}>
                    <View style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                        <Image style={{height: 80, width: 80}} source={require('../../../public/img/lose.png')}/>
                        <Text style={{fontSize:32, fontWeight: 'bold'}}>Você perdeu!</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={{fontWeight: 'bold', fontSize:16, textAlign: 'center'}}>Número sorteado: {numeroSorteado}</Text>
                    </View>
                    <TouchableOpacity onPress={closeModal} style={styles.confirmButton}>
                        <Text style={{color: 'white', fontSize:16, fontWeight:'bold'}}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )

}

const styles = StyleSheet.create({
    modelContainer:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    model:{
        backgroundColor:'#fff',
        width: '80%',
        height:'35%',
        display: 'flex',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirmButton:{
        width: '80%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#BB0000',
        borderRadius: 10,
        marginTop: 20
    }
})