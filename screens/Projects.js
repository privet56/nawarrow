
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Image,
  ImageBackground, Button,
  Animated, Easing
} from 'react-native';

import { KeyboardAvoidingView, FlatList } from 'react-native';
import Project from '../components/Project';

import Btn from 'react-native-micro-animated-button';

import { getProjects, pushData, initApi } from '../services/fbdbwrapper';
import Header from "../components/Header";
import ProjectModel from "../model/model";
const { timing } = Animated;

//type Props = {};

export default class Projects extends Component
{
  static navigationOptions = {
    title: "Projects",
    headerStyle:{ backgroundColor: '#306470'},
    headerTitleStyle:{ color: '#e3f2dc'},
    headerRight: <Header />,
  }

  unsubscribeGetMessages = null;

  state = {
    projects: []
  }
  constructor() {
    super(arguments[0]);
  }
  componentWillUnmount() {
    this.unsubscribeGetMessages();
  }
  componentDidMount()
  {
      console.log("nawARROW - Projects:componentDidMount");
      initApi();

      //TODO: use stores & mobx(or redux better?)
      //TODO: refresh on this.listeners.push(this.props.navigation.addListener('willAppear?', () => this....
      this.unsubscribeGetMessages = getProjects((snapshot) => {
        this.setState({
            projects: Object.values(snapshot.val())
        })
    })
  }
  renderRow = (item) => {
    return (
        <Project item={item} />
    );
  }
  render()
  {
    return (
      <ImageBackground source={require('../res/bg20.gif')} style={styles.container}>
        <KeyboardAvoidingView behavior="padding"
            keyboardVerticalOffset={this.keyboardVerticalOffset}
            style={styles.container}>
            <FlatList
                style={styles.container}
                data={this.state.projects}
                //renderItem={Project}
                renderItem={({ item }) => ( this.renderRow(item))}
                //keyExtractor={(item, index) => (`project-${index}`)}
                keyExtractor={(item, index) => (item.name)}
            />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  listItem: {
    width: '70%',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10
  },
  incomingMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#E1FFC7'
  }  
});
