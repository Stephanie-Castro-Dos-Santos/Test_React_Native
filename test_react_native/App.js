/* IMPORTS */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

/* VARIABLES */
const days = [1,2,3,4,5];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({item})=>(
          <View style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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


