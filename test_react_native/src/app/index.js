/* IMPORTS */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import DayListItem from '../../src/components/core/DayListItem';
import { SplashScreen } from 'expo-router';

/* Used when the fonts are not loaded yet */
SplashScreen.preventAutoHideAsync();

/* VARIABLES */
const days = [...Array(24)].map((val,index) => index+1); // Length of the ARRAY

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <FlatList
        data={days}

        /* As the new container is the FlatList, we should assign a new propety to change the gap betwwen the elements */
        contentContainerStyle={styles.content}

        /* We can change the number of colums we can have in he screen */
        numColumns={2}

        /* To properly give gaps between the columns */
        columnWrapperStyle={styles.column}

        renderItem={({item})=>(
          <DayListItem day={item}/>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

/* Styles for the component */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  },

  content:{
    gap: 10,
  },

  column:{
    gap:10
  }
});


