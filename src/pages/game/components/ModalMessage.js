import { View , Text, StyleSheet, Button, Image } from 'react-native';

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
                    {type === 'success' ? (
                        <Image style={{height: 80, width: 80}} source={require('../../../public/img/checked.png')}/>
                    ):(
                        type === 'error' ? (
                            <Image style={{height: 80, width: 80}} source={require('../../../public/img/lose.png')}/>
                        ):(
                            <Image style={{height: 80, width: 80}} source={require('../../../public/img/warning.png')}/>
                        )
                    )}
                    <Text style={{fontSize:24, fontWeight: 'bold', textAlign: 'center'}}>{message}</Text>
                </View>
                <View style={styles.confirmButton}>
                    <Button 
                        title='Continuar'
                        onPress={closeModal}
                        color={'white'}
                    />
                </View>
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
        alignItems: 'center'
    },
    confirmButton:{
        width: '80%',
        backgroundColor:'red',
        borderRadius: 10,
        marginTop: 20
    }
})