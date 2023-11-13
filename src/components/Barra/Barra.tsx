import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from './style'
const pokeball = require('../../../assets/pokeball.png')
const tm = require('../../../assets/tm.png')
const revive = require('../../../assets/itens.png')
const pedra = require('../../../assets/pedra.png')
const imagem = require('../../../assets/PokemarWhite.png')

export default function barra() {
  return (
    <View style={styles.container} >
      <Image style={styles.img} source={imagem} />
      <View style={styles.containerBar}>
        <View style={styles.containerImg}>
          <Image style={styles.imgPkball} source={revive} />
          <Text style={styles.conteudoText}>  Consumíveis</Text>
        </View>
        <View style={styles.containerImg}>
          <Image style={styles.imgPkball} source={pedra} />
          <Text style={styles.conteudoText} >Pedras</Text>
        </View>
        <View style={styles.containerImg}>
          <Image style={styles.imgPkball} source={tm} />
          <Text style={styles.conteudoText} >Tm's</Text>
        </View>
        <View style={styles.containerImg}>
          <Image style={styles.imgPkball} source={pokeball} />
          <Text style={styles.conteudoText}>Pokebolas</Text>
        </View>

      </View>



    </View>
  )
}