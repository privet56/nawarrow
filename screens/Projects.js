
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Image,
  ImageBackground, Button,
  Animated, Easing
} from 'react-native';

import Btn from 'react-native-micro-animated-button';

const { timing } = Animated;

//type Props = {};

export default class Projects extends Component
{
  static navigationOptions = {
    title: "Projects"
  }

  state = {
    
  }
  constructor() {
    super(arguments[0]);

  }    
  componentDidMount()
  {
      console.log("nawARROW - Projects:componentDidMount");
  }
  start() 
  {
    //TODO: navi!
  }
  render()
  {
    return (
      <ImageBackground source={require('../res/bg20.gif')} style={styles.container}>
        <Text style={styles.welcome}>
          Naw-ARROW!!
        </Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:"white",
    marginBottom: 33,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color:"white"
  },
  belowpic: {
    marginTop: 31,
  },
  button: {
    color:"red"
  },
  btn: {
    marginHorizontal: 99,
    backgroundColor: 'transparent',
    backgroundColor: 'green',
    borderWidth: 3,
    width:66,
    height:66
  },  
  
});
