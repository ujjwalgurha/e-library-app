import React,{Component} from 'react';
import BottomTabNavigator from './components/BottomTabNavigator';
 
export default class App extends  Component {
  
  render(){

    return <BottomTabNavigator/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
