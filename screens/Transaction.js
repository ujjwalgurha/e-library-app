import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class TransactionScreen extends Component{
 
render(){

    return(
  
   <View  style={styles.container}>
    <Text style={styles.text}> 
    Transaction  Screen
    </Text>
   </View>
)
}
}
 
const styles =StyleSheet.create({

container:{
    flex:1,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor:"white"

},
   text:{
      
    color:"black",
    fondSize:30,
   }
})

 