import { View,Text,StyleSheet,Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function DayListItem({day}){
    return(
        <Link href={`/(days)/day${day}`} asChild>
          <Pressable style={styles.box}>
              <Text style={styles.text}>{day}</Text>
          </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({

    box:{
      backgroundColor:'#F9EDE3',
      
      flex:1,
      aspectRatio: 1, /* For calculating width and height */
  
      /* ALIGN */
      justifyContent: 'center',
      alignItems: 'center',
  
      /* BORDER */
      boderColor: '#9b4521',
      borderRadius: 30,
      borderWidth:StyleSheet.hairlineWidth,
    },
  
    text:{
      fontSize: 45,
      color: '#9b4521',
      fontFamily: 'Fira_Sans'
    }
  });