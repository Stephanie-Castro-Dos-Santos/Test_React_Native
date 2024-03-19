/* IMPORTS */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import DayListItem from './src/components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {FiraSansExtraCondensed_500Medium } from '@expo-google-fonts/fira-sans-extra-condensed';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

/* Used when the fonts are not loaded yet */
SplashScreen.preventAutoHideAsync();

/* VARIABLES */
const days = [...Array(24)].map((val,index) => index+1); // Length of the ARRAY

export default function App() {
  /* How to use fonts from Google Fonts */
  const [fontsLoaded, fontError] = useFonts({
    /* Name of the font: value of the font */
    Inter:Inter_900Black,
    Fira_Sans: FiraSansExtraCondensed_500Medium
  });

  /* To prevent the flashes of the font when it's loading */
  useEffect(() => {
    if(fontsLoaded || fontError){ // When they are true
      /* We hide the splash screens */
      SplashScreen.hideAsync();
    }
    
  }, [fontsLoaded, fontError]);

  if(!fontsLoaded && !fontError){
    return null;
  }

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


