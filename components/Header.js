import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Image,
  ImageBackground, Button,
  Animated, Easing
} from 'react-native';

const Header = ({ }) => (
    <ImageBackground source={require('../res/manwithbow.gif')} style={styles.container}>
      <Text> </Text>
    </ImageBackground>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:33,
    height:33,
    marginRight: 9,
  }
});

export default Header;
