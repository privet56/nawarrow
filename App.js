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
import ProjectsStore from './services/projectsstore';
import navStore from './services/navstore';
import * as stores from './services/stores';
import { UIManager } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { Provider, observer, inject } from 'mobx-react';
import { addNavigationHelpers } from 'react-navigation';

//Image -> invariant violation element type is invalid expected a string
//..then you imported Image from react, but you should do it from react-native

//vscode problem!
//type Props = {};

export const MainScreenNavigator = StackNavigator({
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

//TODO: use better import NavigationStore from 'react-navigation-mobx-helpers'; + check if didBlur still fires!
const AppWithInternalState = inject("navStore")(observer(({ nav, navStore }) => (
  <MainScreenNavigator navigation={
    addNavigationHelpers({
      dispatch: navStore.dispatch,
      state: navStore.navigationState,
      addListener: () => { /* TODO: implement in a way that the this.props.navigation.addListener('didBlur' call works! eg. with 'react-navigation-mobx-helpers' */ }
    })} />
)));

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
    //<Provider projectsStore={new ProjectsStore()} {...stores}>

    //TODO: 
    //<MainScreenNavigator /> -> <AppWithInternalState />
    return (
      <Provider {...stores}>
        <MainScreenNavigator />
      </Provider>
      );     
  }
}

AppRegistry.registerComponent('App', () => App);
