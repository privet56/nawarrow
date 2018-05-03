/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PureComponent } from 'react';
import {
  Platform, StyleSheet, Text, View, Image,
  ImageBackground, Button, AppRegistry,
  Animated, Easing, Navigator
} from 'react-native';

//Invariant Violation: Navigator is deprecated and has been removed from this package.
//It can now be installed and imported from react-native-deprecated-custom-components
//import { Navigator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Btn from 'react-native-micro-animated-button';

const { timing } = Animated;

import HomeScreen from './screens/Home';
import ProjectsScreen from './screens/Projects';
import Header from "./components/Header";
import * as storage from './services/storage';
import { Provider } from 'mobx-react';
import ProjectsStore from './services/projectsstore';
import { UIManager } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

//Image -> invariant violation element type is invalid expected a string
//..then you imported Image from react, but you should do it from react-native

//vscode problem!
//type Props = {};

const MainScreenNavigator = StackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerRight: <Header />,
        title:"Home!",
      }
     },
    Projects: { screen: ProjectsScreen },
},
{
  initialRouteName: 'Home',
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      return CardStackStyleInterpolator.forHorizontal(sceneProps);
    }
  }),
  //headerMode: 'none',         //TODO: https://reactnavigation.org/docs/stack-navigator.html
});

export default class App extends PureComponent//<Props>
{
  state = {
    
  }
  constructor()
  {
    super(arguments[0]);
    if(UIManager.setLayoutAnimationEnabledExperimental)
       UIManager.setLayoutAnimationEnabledExperimental(true);
  }    
  componentDidMount()
  {
      console.log("nawARROW - App:componentDidMount");
  }
  render()
  {
    return (
      <Provider projectsStore={new ProjectsStore()}>
        <MainScreenNavigator />
      </Provider>
      );     
  }
}

AppRegistry.registerComponent('App', () => App);
