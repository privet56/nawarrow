
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Image,
  ImageBackground, Button,
  Animated, Easing
} from 'react-native';

import Btn from 'react-native-micro-animated-button';

const { timing } = Animated;

//Image -> invariant violation element type is invalid expected a string
//..then you imported Image from react, but you should do it from react-native

import { StackNavigator, navigation, navigate } from 'react-navigation';
import Header from "../components/Header";

const instructions = Platform.select({
  ios: 'Your Project Management Tool,\n' +
    'for iOS!',
  android: 'Your Project Management Tool,\n' +
    'for Android and iOS!',
});

//vscode problem!
//type Props = {navigation};

export default class Home extends Component
{
  static navigationOptions =  ({ navigation }) => ({
    headerStyle:{ backgroundColor: '#306470', flex:1 },
    headerTitleStyle:{ color: '#e3f2dc'},
  });

  listeners = [];

  state = {
    scaleAnim: new Animated.Value(1)
  }
  constructor(props)
  {
    super(props);
    this.state = {
      scaleAnim: new Animated.Value(1)
    };

    this.listeners.push(this.props.navigation.addListener('didBlur', () => this.btnStart.reset()));  //willFocus, willBlur, didFocus, didBlur
  }

  componentWillUnmount()
  {
    this.listeners.forEach((listener) => {
      listener.remove();
    });
  }
  componentDidMount()
  {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.scaleAnim, {
          toValue: 1.3,
          duration: 1500
        }),
        Animated.timing(this.state.scaleAnim, {
          toValue: 1,
          duration: 1500
        })
      ])).start();

      this.navi2Projects = this.navi2Projects.bind(this);

      console.log("nawARROW - Home:componentDidMount");

      //this.btnStart.success();
      this.btnStart.reset();
  }
  navi2Projects = () =>
  {
    //TODO: why is 
    //  onPress={this.navi2Projects}
    //not working?
    this.props.navigation.navigate('Projects', { originator: 'home' });
  }
  render()
  {
    //TODO: style Btn based on https://github.com/sonaye/react-native-micro-animated-button
    return (
      <ImageBackground source={require('../res/bg.gif')} style={styles.container}>
        <Text style={styles.welcome}>
          Naw-ARROW!!
        </Text>
        <Animated.Image source={require('../res/compass2.gif')} />
        <Text style={[styles.instructions, styles.belowpic]}>
          {instructions}
        </Text>

        <Animated.Text style={[ styles.instructions ]}>
          So you do not stand in the rain!
        </Animated.Text>

        <Btn title="Start!" successIcon="thumbs-up" icon="thumbs-up" errorIcon="thumbs-up" foregroundColor="white"
          ref={ref => (this.btnStart = ref)}
          onPress={() => this.navi2Projects() }
          style={[
          styles.btn,
          {transform: [{scale: this.state.scaleAnim}]}
        ]}
        >
          ^
        </Btn>

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
