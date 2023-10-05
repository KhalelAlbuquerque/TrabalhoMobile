import React from 'react';
import { View, Text, StyleSheet, ScrollView , Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

export function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.containerAll}>
      <View>
        <Image style={styles.logoTitle} source={require('../../public/img/logoCassino.png')}></Image>
        <Text style={styles.mainTitle}>
            Dadinho do <Text style={styles.blaze}>Blabla</Text>
        </Text>
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.bestPlat}>A melhor plataforma de jogos</Text>
        <Swiper
          loop={true}
          showsPagination={true}
          style={styles.carrossel}
          dotStyle={styles.swiperDot} 
          activeDotStyle={styles.swiperActiveDot} 
        >
          <View style={styles.blocoCarrossel}>
            <Image
              style={styles.imagemHome}
              source={require('../../public/img/dados.png')}
            />
            <View style={styles.textinho}>
                <Text>Se divirta de qualquer lugar</Text>
            </View>
          </View>
          <View style={styles.blocoCarrossel}>
            <Image
              style={styles.imagemHome}
              source={require('../../public/img/setesJackpot.png')}
            />
            <View>
                <Text>Obtenha a sorte grande</Text>
            </View>
          </View>
          <View style={styles.blocoCarrossel}>
            <Image
              style={styles.imagemHomeShield}
              source={require('../../public/img/shield.png')}
            />
            <View style={{ alignItems: 'center' }}>
                <Text>Jogue com responsabilidade</Text>
                <Text>e evite danos futuros</Text>
            </View>
          </View>
          </Swiper>
      </View>

      <View style={styles.buttonPlay}>
        <Button
            title='Jogue agora!'
            onPress={() => navigation.navigate('Game')}
            color={'#BD0000'}
        />
      </View>

      <View style={styles.footer}>
        <Image style={styles.logoFooter} source={require('../../public/img/logoCassino.png')}></Image>
        <Text style={styles.footerText}>Dadinho do <Text>Blabla</Text></Text>
        <Text style={styles.footerText}>Todos os direitos reservados</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerAll:{
    backgroundColor: '#FFFFFF'
  },
  logoTitle:{
    marginTop: 80,
    height: 100,
    width:100,
    marginLeft: 'auto',
    marginRight: 'auto'
  },   
  mainTitle: {
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
    fontSize: 32
  },
  blaze: {
    color: 'red',
    fontWeight: 'bold',
  },
  bestPlat:{
    textAlign:'center',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#BD0000'
  },
  containerInfo: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    height: 350,
    textAlign:'center',
    backgroundColor: '#FFFFFF'
  },
  imagemHome: {
    maxHeight: 200,
    width: '80%'
  },
  imagemHomeShield:{
    maxHeight: 200,
    width: '65%',
  },
  carrossel: {
    height: "500px", 
  },
  blocoCarrossel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  textinho: {
    color: #3A3A3A,
    font-family: Roboto
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  },
  swiperDot: {
    backgroundColor: 'gray', 
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  swiperActiveDot: {
    backgroundColor: 'red', 
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  buttonPlay: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5
  },
  footer:{
    marginTop: 30,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginBottom: 100
  },
  logoFooter:{
    height: 50,
    width: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  footerText:{
    textAlign:'center',
    fontSize: 10,
    width: 200,
    marginTop: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});
