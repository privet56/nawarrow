/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';

//Image -> invariant violation element type is invalid expected a string
//..then you imported Image from react, but you should do it from react-native

const instructions = Platform.select({
  ios: 'Your Project Management Tool,\n' +
    'for iOS!',
  android: 'Your Project Management Tool,\n' +
    'for Android and iOS!',
});

//vscode problem!
type Props = {};

export default class App extends Component<Props>
{
  render()
  {
    
    return (
      <ImageBackground source={require('./res/bg.gif')} style={styles.container}>
        <Text style={styles.welcome}>
          NawArrow!
        </Text>
        <Text style={styles.instructions}>

        <Image style={{width: 300, height: 333}}
            source={require('./res/manwithbow.gif')} />

        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>

        <Text style={styles.instructions}>
          So you do not stand in the rain!
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
    color:"white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color:"white"
  },
});
