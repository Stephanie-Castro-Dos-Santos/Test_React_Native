/* IMPORTS */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

/* VARIABLES */
const days = [1,2,3,4,5];

export default function App() {
  return (
    <View style={styles.container}>
      {
      /*<Text style={[styles2.text]}>Hello World! I'm Queen the Bichon</Text>
      <Text style={[styles2.text]}>Welcome to my app</Text>
      <Image
        source={{
          uri: 'https://images.hola.com/imagenes/mascotas/20180504123602/bichon-maltes-evitar-agresividad/0-563-608/bichon-maltes-t.jpg?tx=w_1200',
        }}
      />
      <Image
        source={require('./assets/maltes.png')}
      />*/
      }

      <FlatList
        data={days}
        renderItem={({item})=>(
          <View style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        //horizontal
      />


      {/*days.map((day)=>(
        <View style={styles.box} key={day}>
          <Text style={styles.text}>{day}</Text>
        </View>
      ))*/}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },

  box:{
    backgroundColor:'#F9EDE3',
    width: 250,
    height: 250,

    /* ALIGN */
    justifyContent: 'center',
    alignItems: 'center',

    /* BORDER */
    boderColor: '#9b4521',
    borderRadius: 30,
    borderWidth:StyleSheet.hairlineWidth,
  },

  text:{
    fontSize: 50,
    color: '#9b4521'
  }
});


