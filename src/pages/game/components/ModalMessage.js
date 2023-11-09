import { View , Text, StyleSheet, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

export function ModalMessage({setModalMessage, type, message, setModal = null}){

    function closeModal(){
        setModalMessage(false)
        if(type === 'success'){
            setModal?setModal(false): false
        }
    }


    return (
        <View style={styles.modelContainer}>
            <View style={styles.model}>
                <View style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Image style={{height: 80, width: 80}} source={
                        type ==='success' ? require('../../../public/img/checked.png') :
                        type === 'error' ? require('../../../public/img/lose.png') :
                        require('../../../public/img/warning.png')
                    }/>
                    
                    <Text style={{fontSize:24, fontWeight: 'bold', textAlign: 'center'}}>{message}</Text>
                </View>
                <TouchableOpacity onPress={closeModal} style={styles.confirmButton}>
                    <Text style={{color:'white', fontSize: 16, fontWeight: 'bold'}}>Continuar</Text>
                </TouchableOpacity>
            </View>
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
        alignItems: 'center',
        zIndex: 99
    },
    model:{
        backgroundColor:'#fff',
        width: '80%',
        height:'30%',
        display: 'flex',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    confirmButton:{
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#BD0000',
        borderRadius: 10,
        marginTop: 20
    }
})