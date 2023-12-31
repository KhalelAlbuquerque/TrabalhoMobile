import React, { useState, useEffect } from 'react';
import { View, ScrollView , Text, TextInput, StyleSheet, Button, TouchableOpacity, Image, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { ModalDep } from './components/ModalDep';
import { ModalSaq } from './components/ModalSaq';
import { ModalComoFunciona }from './components/ModalComoFunciona';
import { ModalComoJogar }from './components/ModalComoJogar';
import { ModalResult } from './components/ModalResult'
import { ModalMessage } from './components/ModalMessage'

export function Game() {
    const navigation = useNavigation()

    const [balance,setBalance] = useState(100);
    const [aposta, setAposta] = useState('');
    const [size, setSize] = useState(50);
    const [multiplicador, setMultiplicador] = useState(1.98);
    const [win, setWin] = useState(50);
    const [lucro, setLucro] = useState(null);
    const [valorTextInput, setValorTextInput] = useState(size.toString());
    const [mostrarOpcoes, setMostrarOpcoes] = useState(false)
    const [arrowSaldo, setArrowSaldo] = useState('▼')
    const [diceRoll, setDiceRoll] = useState(false)
    const [modalDep,setModalDep] = useState(false)
    const [modalSaq,setModalSaq] = useState(false)
    const [modalComoJogar, setModalComoJogar] = useState(false)
    const [modalComoFunciona, setModalComoFunciona] = useState(false)
    const [modalResult, setModalResult] = useState(false)
    const [winner, setWinner] = useState(false)
    const [valueNotification, setValueNotification] = useState(0)
    const [numSorteado, setNumSorteado] = useState(0)
    const [modalMessage, setModalMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [desactiveButton, setDesactiveButton] = useState(false)


    function calculateMultiplicador(value) {
        const valor = (99 / (100 - value))
        if(valor>=10){
            return valor.toFixed(3)
        }
        return valor.toFixed(4);
    }

    function ChanceDeGanhar(value) {
        return 100 - value;
    }

    function sendMessage(type, message){
        setType(type)
        setMessage(message)
        setModalMessage(true)
    }

    function handleChange(value) {
        setSize(value.toFixed(0));
        const novoMultiplicador = calculateMultiplicador(value);
        setMultiplicador(novoMultiplicador);
        setWin(ChanceDeGanhar(value).toFixed(2));
        const novoValor = parseFloat(value)
        setValorTextInput(novoValor.toFixed(0))
    }

    function handlePress() {
        if (aposta) {
            const valorNumerico = parseFloat(aposta);
            const lucroAposta = (valorNumerico * multiplicador) - valorNumerico;
            setLucro(lucroAposta.toFixed(2));
        }
    }

    function toggleOptions (){
        setMostrarOpcoes(!mostrarOpcoes)
        arrowSaldo==='▼' ? setArrowSaldo('▲') : setArrowSaldo('▼')
    }


    function fazerAposta(e) {
        e.preventDefault()
        if(aposta.includes(',') || valorTextInput.includes(',')) {
            sendMessage('warning', 'Digite um número sem virgulas! (Use ponto)')
            return 0
        }

        const valorAposta = parseFloat(aposta);
        const saldo = parseFloat(balance).toFixed(2);

        if (!isNaN(valorAposta) && valorAposta <= saldo) {
            rollDice()
            setTimeout(() => {
                if (aposta) {
                    const numeroAleatorio = (Math.random() * 100).toFixed(0);
                    setNumSorteado(numeroAleatorio)
                if (numeroAleatorio > size) {
                    // alert(`Ganhou! Valor que recebeu: R$${(aposta * multiplicador).toFixed(2)} Número sorteado: ${ + numeroAleatorio}`);
                    setValueNotification((aposta*multiplicador).toFixed(2))
                    setWinner(true)
                    setModalResult(true)
                    const novoBalance = (parseFloat(balance) + (aposta * multiplicador - aposta)).toFixed(2);
                    setBalance(novoBalance);
                } else {
                    setValueNotification(0)
                    setWinner(false)
                    setModalResult(true)
                    const novoBalance = (balance - aposta).toFixed(2);
                    setBalance(novoBalance);
                    }
                }
            }, 1400);
        }else if(isNaN(valorAposta)) {
            sendMessage('warning', "Digite um valor para apostar")
        }else{
            sendMessage('warning', "Saldo insuficiente")
        }
    }

    function handleTextInputChange(text) {
        setValorTextInput(text);
      
        const novoValor = parseFloat(text);
        if (!isNaN(novoValor) && novoValor>=2 && novoValor<=98 ) {
            setSize(novoValor);
            const novoMultiplicador = calculateMultiplicador(novoValor);
            setMultiplicador(novoMultiplicador);
            setWin(ChanceDeGanhar(novoValor).toFixed(2));
        } else if(novoValor<0 || novoValor>98){
            sendMessage('warning', "Digite um número de 2 a 98")
            setValorTextInput('50');
            setSize(50)
            setMultiplicador(calculateMultiplicador(50))
            setWin(ChanceDeGanhar(50).toFixed(2))
            return 0
        } else {
            setSize('--')
            setMultiplicador('--')
            setWin('--')

        }
      }

    function rollDice(){
        setDiceRoll(true)
        setDesactiveButton(true)
        setTimeout(() => {
            setDiceRoll(false)
            setTimeout(() => {
                setDesactiveButton(false)
            }, 100);
        }, 1400);
    }

    useEffect(() => handlePress(), [aposta, multiplicador,size]);

    return (
        <ScrollView style={styles.containerAll}>
            <View style={{backgroundColor:'#EDC9C9', paddingTop:65, marginBottom:30}}>
                <View style={styles.containerHeader}>
                    <View style={styles.voltar}>
                        <Button
                            title='Voltar'
                            onPress={() => navigation.navigate('Home')}
                            color={'white'}
                        />
                    </View>
                    <TouchableOpacity  onPress={toggleOptions}  style={mostrarOpcoes ? styles.enabledOpacity : styles.disabledOpacity}>
                        <Text style={{width: '80%', textAlign: 'center',fontSize: 24,color: '#fdfdfd',fontWeight: 'bold'}}>
                            SALDO: <Text style={{color: '#525252'}}>R${balance} <Text style={{color:'red'}}>{arrowSaldo}</Text></Text>
                        </Text>
                        
                        {mostrarOpcoes && (
                            <View style={{marginTop: 5}}>
                                <TouchableOpacity onPress={() => {setModalDep(true); toggleOptions()}} style={styles.option}>
                                    <Image style={{width:25, height:25}} source={require('../../public/img/deposit.png')}/>
                                    <Text style={{fontSize: 16, marginLeft: 10}}>Depositar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {setModalSaq(true); toggleOptions()}} style={styles.option}>
                                    <Image style={{width:25, height:25}} source={require('../../public/img/withdraw.png')}/>
                                    <Text style={{fontSize: 16, marginLeft: 10}}>Sacar</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>

                {diceRoll
                    ? (
                    <Image style={{marginLeft:'auto', marginRight:'auto', width: 100, height:100, marginTop: 70, marginBottom: 20}} source={require('../../public/img/dadoGif.gif')}/>
                    ) : (        
                    <Image style={{marginLeft:'auto', marginRight:'auto', width: 100, height:100, marginTop: 70,marginBottom: 20}} source={require('../../public/img/frame-01.gif')}/>
                    )
                }
            </View>

            <View style={styles.container}>

                <View style={styles.range}>
                    <View style={styles.valueContainer}><Text style={[styles.valueText, styles.textStyle2]}>0</Text></View>
                    <View style={styles.valueContainer}><Text style={[styles.valueText, styles.textStyle2]}>25</Text></View>
                    <View style={styles.valueContainer}><Text style={[styles.valueText, styles.textStyle2]}>50</Text></View>
                    <View style={[styles.valueContainer, styles.entrygap2]}><Text style={[styles.valueText, styles.textStyle2]}>75</Text></View>
                    <View style={styles.valueContainer}><Text style={[styles.valueText, styles.textStyle2]}>100</Text></View>
                </View>
                <View style={styles.spin}>
                    <Slider
                        disabled={desactiveButton}
                        style={styles.slider}
                        minimumValue={2}
                        maximumValue={98}
                        step={1}
                        maximumTrackTintColor='green'
                        minimumTrackTintColor='red'
                        thumbTintColor='white'
                        value={size}
                        onValueChange={value=>{
                            clearTimeout(this.sliderTimeoutId)
                            this.sliderTimeoutId = setTimeout(()=>{
                                handleChange(value)
                            },10)
                        }}
                    />
                </View>
            </View>
            <View style={[styles.containerFunctions]}>
                <View style={[styles.operations]}>
                <Text style={[styles.textStyle2,{marginBottom: 5, fontSize: 12}]} aria-label="Label for Username" nativeID="labelUsername">Multiplicador</Text>
                    <Text style={[styles.operadores, {fontSize:30}]}>
                        {multiplicador}
                    </Text>
                </View>
                <View style={[styles.operations]}>
                    <Text style={[styles.textStyle2,{marginBottom: 5, fontSize: 12}]} aria-label="Label for Username" nativeID="labelUsername">Rolar Acima</Text>
                    <TextInput
                        editable={!desactiveButton}
                        value={valorTextInput}
                        placeholder={size.toString()}
                        onChangeText={handleTextInputChange}
                        style={[styles.operadores, {fontSize:30}]}
                        keyboardType="numeric"
                        placeholderTextColor="#fff"
                        />
                </View>
                <View style={[styles.operations]}>
                    <Text style={[styles.textStyle2,{marginBottom: 5, fontSize: 12}]} aria-label="Label for Username" nativeID="labelUsername">Chance de vitória</Text>
                    <Text style={[styles.operadores, {fontSize:30}]}>
                        {win}
                    </Text>
                </View>
            </View>

            <View style={styles.apostaContainer}>
                <View style={styles.apostaEntry}>
                    <Text style={[styles.textStyle2, {marginBottom: 7}]}>Valor da Aposta</Text>
                    <Text style={styles.textStyle2}> SALDO R$ {balance}</Text>
                </View>
                <View>
                    <TextInput
                        editable={!desactiveButton}
                        value={aposta.toString()}
                        placeholder="Valor para apostar"
                        style={styles.inputAposta}
                        onChangeText={(text) =>setAposta(text)}
                        keyboardType="numeric"
                        onSubmitEditing={fazerAposta}
                        placeholderTextColor={'black'}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={{borderRadius: 15}} disabled={desactiveButton} color={'white'} title="Apostar" onPress={fazerAposta} />
                </View>
                <View style={{ width: '100%'}}>
                    <Text style={[styles.apostaEntry,styles.textStyle2,{marginTop: 7,marginBottom: 7}]}>
                        Lucro na vitória
                    </Text>
                    <Text style={[{backgroundColor: 'white', padding: 10, borderRadius: 5, color: '#525252',fontWeight: 'bold'}]}>
                        {lucro ? `R$ ${lucro}` : '0.00'}
                    </Text>
                </View>
            </View>
            
            <View style={styles.infosOrganizer}>
                <View style={{backgroundColor: 'gray', color:"#525252",  fontSize: '3rem', width: "45%", marginTop: 10, borderRadius: 10}}>
                    <Button
                        disabled={desactiveButton}
                        title='COMO JOGAR?'
                        onPress={() => setModalComoJogar(true)}
                        color={'white'}
                    />
                </View>
                <View style={{backgroundColor: 'gray', color:"#525252",  fontSize: '3rem', width: "45%", marginTop: 10, borderRadius: 10}}>
                    <Button
                        disabled={desactiveButton}
                        title='COMO FUNCIONA?'
                        onPress={() => setModalComoFunciona(true)}
                        color={'white'}
                    />
                </View>
            </View>

            <Modal visible={modalDep} animationType='fade' transparent={true}>
                <ModalDep balance={balance} setBalance={setBalance} setModalDep={setModalDep}/>
            </Modal>
            <Modal visible={modalSaq} animationType='fade' transparent={true}>
                <ModalSaq balance={balance} setBalance={setBalance} setModalSaq={setModalSaq}/>
            </Modal>
            <Modal visible={modalComoJogar} animationType='fade' transparent={true}>
                <ModalComoJogar setModalComoJogar={setModalComoJogar}/>
            </Modal>
            <Modal visible={modalComoFunciona} animationType='fade' transparent={true}>
                <ModalComoFunciona setModalComoFunciona={setModalComoFunciona}/>
            </Modal>
            <Modal visible={modalResult} animationType='fade' transparent={true}>
                <ModalResult setModalResult={setModalResult} numeroSorteado={numSorteado} valorRecebido={valueNotification} winner={winner}/>
            </Modal>
            <Modal visible={modalMessage} animationType='fade' transparent={true}>
                <ModalMessage setModalMessage={setModalMessage} type={type} message={message}/>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textStyle1: {
        color: '#C291F2'
    },
    textStyle2: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    voltar:{
        width: 80,
        position: 'absolute',
        backgroundColor: '#BD0000',
        borderRadius: 10,
        left: 5
    },
    containerHeader:{
        position: 'absolute',
        top: 70, 
        left: 0, 
        right: 0, 
        marginLeft: 'auto', 
        marginRight:'auto', 
        zIndex: 99
    },
    disabledOpacity:{ 
        marginLeft:'auto',
        marginRight: 'auto',
        backgroundColor: '#DCD0D1',
        marginBottom: 20, 
        alignItems: 'center', 
        padding: 8,
        borderRadius: 10
    },
    enabledOpacity:{ 
        marginLeft:'auto',
        marginRight: 'auto',
        backgroundColor: '#DCD0D1',
        marginBottom: 20, 
        alignItems: 'center', 
        padding: 8,
        borderRadius: 10,
        borderColor: '3b3b3b',
        borderWidth: 1
    },
    option:{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 40
},
    apostaContainer:{
        width: '100%', 
        backgroundColor: '#DCD0D1', 
        paddingHorizontal: 20, 
        paddingTop: 10, 
        paddingBottom: 20,
        width: '90%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius: 10
    },
    apostaEntry: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    entrygap2: {
        paddingLeft: 10,
    },
    valueContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    inputAposta: {
        borderRadius: 5,
        width: '100%',
        backgroundColor: 'white',
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#525252'
    },
    Aposta: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        padding: 15,
        backgroundColor: '#fdfd',
    },
    operadores: {
        backgroundColor: '#DCD0D1',
        color: 'black',
        borderRadius: 3,
        height: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    operations: {
        width:'30%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#DCD0D1',
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        gap: 5
    },
    containerAll: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '100%',
    },
    slider: {
        width: '90%',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    spin: {
        height: 50,
        backgroundColor: '#DCD0D1',
        borderRadius: 40,
        marginTop: -20,
        marginBottom: 20
    },
    container: {
        flex: 1,
        width: '90%',
        margin: 'auto',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    range: {
        flex: 1,
        width: '110%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    containerFunctions: {
        borderRadius: 8,
        width: '90%',
        marginBottom: 20,
        flex: 1,
        minHeight: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight:'auto'
    },
    containerAposta: {
        flex: 1,
        flexDirection: 'column',
        width: '110%',
    },
    infosOrganizer:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        gap: 10
    },
    buttonContainer:{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:50,
        display:'flex',
        justifyContent:'center',
        borderRadius: 5,
        backgroundColor:'#BD0000'
    }
});

export default Game;
