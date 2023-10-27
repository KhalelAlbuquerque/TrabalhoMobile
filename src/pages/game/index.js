import React, { useState, useEffect } from 'react';
import { View, ScrollView , Text, TextInput, StyleSheet, Button, TouchableOpacity, Image, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { ModalDep } from './components/ModalDep';
import { ModalSaq } from './components/ModalSaq';
import { ModalInfos }from './components/ModalInfos';

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
    const [modalInfo, setModalInfo] = useState(false)


    function calculateMultiplicador(value) {
        return (99 / (100 - value)).toFixed(4);
    }

    function ChanceDeGanhar(value) {
        return 100 - value;
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
            alert("Digite um numero sem vírgulas! (Use ponto)")
            return 0
        }

        const valorAposta = parseFloat(aposta);
        const saldo = parseFloat(balance);

        if (!isNaN(valorAposta) && valorAposta <= saldo) {
            rollDice()
            setTimeout(() => {
                if (aposta) {
                    const numeroAleatorio = (Math.random() * 100).toFixed(0);
                if (numeroAleatorio > size) {
                    alert(`Ganhou! Valor que recebeu: R$${(aposta * multiplicador).toFixed(2)} Número sorteado: ${ + numeroAleatorio}`);
                    const novoBalance = (parseFloat(balance) + (aposta * multiplicador - aposta)).toFixed(2);
                    setBalance(novoBalance);
                } else {
                    alert('Perdeu! ' + `Número sorteado: ${ + numeroAleatorio}`);
                    const novoBalance = (balance - aposta).toFixed(2);
                    setBalance(novoBalance);
                    }
                }
            }, 1400);
        }else if(isNaN(valorAposta)) {
            alert("Digite um valor para apostar")
        }else{
            alert('Saldo insuficiente');
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
            setValorTextInput('50');
            alert("Digite um número de 2 á 98")
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
        setTimeout(() => {
            setDiceRoll(false)
        }, 1400);
    }

    useEffect(() => handlePress(), [aposta, multiplicador,size]);

    return (
        <ScrollView style={styles.containerAll}>
            <View style={{backgroundColor:'#EDC9C9', paddingTop:65, marginBottom:30}}>
                <View style={styles.voltar}>
                    <Button
                        title='Voltar'
                        onPress={() => navigation.navigate('Home')}
                        color={'transparent'}
                    />
                </View>
                <TouchableOpacity  onPress={toggleOptions}  style={{ marginLeft:'auto', marginRight: 'auto',backgroundColor: '#DCD0D1',marginBottom: 40, alignItems: 'center', padding: 8,borderRadius: 10}}>
                    <Text style={{width: '80%', textAlign: 'center',fontSize: 24,color: '#fdfdfd',fontWeight: 'bold'}}>
                        SALDO: <Text style={{color: '#525252'}}>R${balance} <Text style={{color:'lightgray'}}>{arrowSaldo}</Text></Text>
                    </Text>
                    
                    {mostrarOpcoes && (
                        <View>
                            <View style={{marginBottom: 5}}>
                                <Button
                                    style={{textAlign: 'center', fontWeight: 'bold'}}
                                    title='Depositar'
                                    onPress={() => {setModalDep(true); toggleOptions()}}
                                    color={'purple'}
                                />
                            </View>
                            <View>
                                <Button
                                    style={{textAlign: 'center', fontWeight: 'bold'}}
                                    title='Sacar'
                                    onPress={() => {setModalSaq(true); toggleOptions()}}
                                    color={'purple'}
                                />
                            </View>
                        </View>
                    )}
                </TouchableOpacity>

                {diceRoll
                    ? (
                    <Image style={{marginLeft:'auto', marginRight:'auto', width: 100, height:100}} source={require('../../public/img/dadoGif.gif')}/>
                    ) : (        
                    <Image style={{marginLeft:'auto', marginRight:'auto', width: 100, height:100}} source={require('../../public/img/frame-01.gif')}/>
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
                        style={styles.slider}
                        minimumValue={2}
                        maximumValue={98}
                        step={1}
                        maximumTrackTintColor='green'
                        minimumTrackTintColor='red'
                        thumbTintColor='white'
                        value={size}
                        onValueChange={handleChange}
                    />
                </View>
            </View>
            <View style={[styles.containerFunctions]}>
                <View styles={[styles.operations]}>
                <Text style={[styles.textStyle2,{marginBottom: 5}]} aria-label="Label for Username" nativeID="labelUsername">Multiplicador</Text>
                    <Text style={styles.operadores}>
                        {multiplicador}
                    </Text>
                </View>
                <View styles={[styles.operations]}>
                    <Text style={[styles.textStyle2,{marginBottom: 5}]} aria-label="Label for Username" nativeID="labelUsername">Rolar Acima</Text>
                    <TextInput
                        value={valorTextInput}
                        placeholder={size.toString()}
                        style={styles.operadores}
                        onChangeText={handleTextInputChange}
                        keyboardType="numeric"
                        placeholderTextColor="#fff"
                        />
                </View>
                <View styles={[styles.operations]}>
                <Text style={[styles.textStyle2,{marginBottom: 5}]} aria-label="Label for Username" nativeID="labelUsername">Chance de vitória</Text>
                    <Text style={styles.operadores}>
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
                        value={aposta.toString()}
                        placeholder="Valor para apostar"
                        style={styles.inputAposta}
                        onChangeText={(text) => setAposta(text)}
                        keyboardType="numeric"
                        onSubmitEditing={fazerAposta}
                    />
                </View>
                <Button style={{borderRadius: 15}} color={'green'} title="Apostar" onPress={fazerAposta} />
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
                        title='COMO JOGAR?'
                        onPress={() => setModalInfo(true)}
                        color={'white'}
                    />
                </View>
                <View style={{backgroundColor: 'gray', color:"#525252",  fontSize: '3rem', width: "45%", marginTop: 10, borderRadius: 10}}>
                    <Button
                        title='COMO FUNCIONA?'
                        onPress={() => setModalInfo(true)}
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
            <Modal visible={modalInfo} animationType='fade' transparent={true}>
                <ModalInfos setModalInfo={setModalInfo}/>
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
        color: '#525252'
    },
    voltar:{
        width: 100,
        position: 'absolute'
        
    },
    apostaContainer:{
        width: '100%', 
        backgroundColor: '#ddd', 
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
        color: '#525252',
        fontWeight: 'bold',
    },
    Aposta: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        padding: 15,
        backgroundColor: '#fdfd',
    },
    operadores: {
        padding: 10,
        backgroundColor: '#DCD0D1',
        color: '#fff',
        borderRadius: 3,
        height: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    operations: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ddd',
        height: 100,
        display: 'flex',
        flexDirection: 'column'
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
        backgroundColor: '#ddd',
        borderRadius: 40,
        marginTop: -20,
        marginBottom: 20
    },
    container: {
        flex: 1,
        width: '90%',
        margin: 'auto',
        marginHorizontal: 20,
        marginBottom: 10
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
        marginHorizontal: 20,
        padding: 15,
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
    }
});

export default Game;
