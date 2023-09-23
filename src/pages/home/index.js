import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper'; // Importe o Swiper

export function Home() {
  return (
    <View>
      <Text style={styles.mainTitle}>
        Dadinho da <Text style={styles.blaze}>Blaze</Text>
      </Text>
      <View style={styles.containerInfo}>
        <Text style={styles.bestPlat}>A melhor plataforma de jogos</Text>
        <Swiper
          loop={true}
          showsPagination={true}
          style={styles.carrossel}
          dotStyle={styles.swiperDot} // Adicione um estilo para os pontos de paginação
          activeDotStyle={styles.swiperActiveDot} // Adicione um estilo para o ponto ativo
        >
          <View style={styles.blocoCarrossel}>
            <Image
              style={styles.imagemHome}
              source={require('../../public/img/dados.png')}
            />
            <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 100,
    margin: 'auto',
    width: '100%',
    fontSize: 32,
  },
  blaze: {
    color: 'red',
    fontWeight: 'bold',
  },
  bestPlat:{
    textAlign:'center',
    fontSize: 20
  },
  containerInfo: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
    height: 350,
    textAlign:'center'
  },
  imagemHome: {
    maxHeight: 200,
    width: '80%'
  },
  imagemHomeShield:{
    maxHeight: 200,
    width: '65%'
  },
  carrossel: {
    height: "500px", // Defina a altura do carrossel de acordo com suas necessidades
  },
  blocoCarrossel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  swiperDot: {
    backgroundColor: 'gray', // Cor dos pontos de paginação inativos
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  swiperActiveDot: {
    backgroundColor: 'red', // Cor do ponto de paginação ativo
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
});
