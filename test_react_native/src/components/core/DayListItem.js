import{View,Text,StyleSheet} from 'react-native';

export default function DayListItem({day}){
    return(
        <View style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </View>
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
      fontFamily: 'Inter'
    }
  });