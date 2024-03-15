import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
 /*<View></View>*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles2.text]}>Hello World! I'm Queen the Bichon</Text>
      <Text style={[styles2.text]}>Welcome to my app</Text>
      {/*<Image
        source={{
          uri: 'https://images.hola.com/imagenes/mascotas/20180504123602/bichon-maltes-evitar-agresividad/0-563-608/bichon-maltes-t.jpg?tx=w_1200',
        }}
      />*/}
      <Image
        source={require('./assets/maltes.png')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const styles2 = StyleSheet.create({
    text:{
      color: 'white',
      weight: 'bolder'
    }
});

