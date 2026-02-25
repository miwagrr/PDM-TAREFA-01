import { Button, ImageBackground, TextInput, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';

const bgImage = require('./assets/BG-aulaP02');

export default function Teste() {
  const [nome,setNome] = useState('');

  const handlePress = () => {
    alert(nome);
  }

  return(
    <ImageBackground source={bgImage} style={styles.bg}>
    
    <SafeAreaView style={styles.container}>
    
    <Text>Digite seu nome:</Text>
    
    <TextInput
    style={styles.input}
    placeholder="Seu nome aqui"
    value={nome}
    onChangeText={setNome}
    />
      
    <Button title = "BOTÃO" onPress={handlePress}/>
      
    </SafeAreaView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
    bg:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    padding: 20,
  },
  
  input: {
    borderWidth: 5,
    borderColor: '#FFFFFF',
    marginVertical: 10,
    paddingHorizontal: 8,
  }
});
