import { Image, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';

const bgImage = require('./assets/FUNDO');
const carta1 = require('./assets/carta1.png');
const carta2 = require('./assets/carta2.png');
const carta3 = require('./assets/carta3.png');
const carta4 = require('./assets/carta4.png');
const carta5 = require('./assets/carta5.png');
const carta6 = require('./assets/carta6.png');



export default function Teste() {

  return(
    <ImageBackground source={bgImage} style={styles.bg}>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scroll}>

    <Image source={carta1} style={styles.cartas}/>
    <Image source={carta5} style={styles.cartas}/>
    <Image source={carta3} style={styles.cartas}/>
    <Image source={carta4} style={styles.cartas}/>
    <Image source={carta2} style={styles.cartas}/>
    <Image source={carta6} style={styles.cartas}/>
    </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({

  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartas: {
    margin: 47,
    alignItems: 'center',
    borderRadius: 15,
  
  },

  scroll: {
    flex: 1,
  },
});
