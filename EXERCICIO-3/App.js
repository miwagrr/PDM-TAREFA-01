import { Text, Button, View, ImageBackground, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';

const bgImage = require('./assets/geladeira.png');

export default function AssetExample() {
  const [nome, setNome] = useState('');
  const [itens, setItens] = useState([]);

  const handlePress = () => {
      setItens([...itens, nome]);
      setNome('');
  }

  return (
    <ImageBackground source={bgImage} style={styles.bg}>
    <SafeAreaView style={styles.container}>
    
    <KeyboardAvoidingView style={styles.flexContainer}>

    <Text style={styles.listaTitulo}>Lista de compras</Text>
    
    <TextInput
    style={styles.input}
    placeholder="Adicionar novo item"
    value={nome}
    onChangeText={setNome}
    keyboardType="default"
    />

    <Button title="Adicionar à lista" onPress={handlePress}/>
    
    <ScrollView style={styles.scroll}>
    <View style={styles.listaContainer}>
    {itens.map((item, index) => (
    <Text key={index} style={styles.itemTexto}>• {item}</Text>
    ))}
    </View>
    </ScrollView>

    </KeyboardAvoidingView>

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
    borderColor: '#ffffff',
    marginVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
  },

  listaTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

  scroll: {
    width: '100%',
    marginTop: 10,
  },

  listaContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
  },

  itemTexto:{
    fontSize: 18,
    marginVertical: 5,
  }

});
