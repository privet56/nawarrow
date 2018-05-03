import React from 'react';
import { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, TouchableOpacity, View, StyleSheet, Text, Animated, Switch, Image } from 'react-native'

export default class Project extends PureComponent
{
  state = {
    highlighted:false,
    offsetX: new Animated.Value(-Dimensions.get('window').width),
    progressAni: new Animated.Value(0)
  }

  constructor(props)
  {
    super(props);
  }

  componentWillMount()
  {
    var v = Dimensions.get('window').width * ((this.props.index % 2) == 0 ? 1 : -1);
    this.setState({offsetX: new Animated.Value(v), progressAni:new Animated.Value(0)});
  }
  componentDidMount()
  {
    Animated.timing(this.state.offsetX, {
      toValue: 0,
      duration: 666,
      delay: this.props.index * 333
    }).start();
    Animated.spring(this.state.progressAni, {
      toValue: (this.props.index + 1)*30,
      duration: 1999,
      delay: this.props.index+1 * 1111
    }).start();
  }

  isStatusOK = () => {

    return this.props.item.status != "wip";
  }
  switchStatusOK = () => {

    this.props.onPress();
  }

  onSelected = () =>
  {
    this.setState({highlighted:!this.state.highlighted});
  }

  render() {
    return (
      <Animated.View style={[
          styles.pr,
          {transform: [{translateX: this.state.offsetX},{ rotateX: this.state.highlighted ? '33deg' : '0deg'},{ scale: this.state.highlighted ? 1.1 : 1.0}]},
          this.state.highlighted ? styles.highlighted : styles.unhighlighted
        ]}>
        <TouchableOpacity onPress={() => this.onSelected() }>
          <Text style={[ styles.prtext, styles.prtextname ]}>{this.props.item.name}</Text>
          <Text style={[ styles.prtext ]}>{this.props.item.description}</Text>
          <View style={{width:'100%', flex:1, flexDirection: 'row'}}>
            <Text style={[ styles.prtext, styles.prstatus ]}>Status: </Text>
            <Animated.Image source={require('../res/thumbsdown.gif')} style={[styles.img, this.isStatusOK() && styles.hidden ]} />
            <Animated.Image source={require('../res/ok.png')} style={[styles.img, !this.isStatusOK() && styles.hidden ]} />
            <Switch
              value={this.isStatusOK()}
              onValueChange={(value) => this.switchStatusOK() }
              />
            <Text style={[ styles.prtext, styles.prstatus ]}>  Efforts: </Text>
            <Animated.Image source={require('../res/thumbsdown.gif')} style={[styles.img, this.isStatusOK() && styles.hidden ]} />
            <Animated.Image source={require('../res/sun.png')} style={[styles.img, !this.isStatusOK() && styles.hidden ]} />
          </View>
          <Animated.Image source={require('../res/na-arrow.png')} style={{width: this.state.progressAni.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
          }), height: 23}} resizeMode="stretch" />
      </TouchableOpacity>
    </Animated.View>
    )
  }
}

/*
const Project = ({ item }) => (
  <View style={[ styles.pr ]}>
    <Text style={[ styles.prtext, styles.prtextname ]}>{item.name}</Text>
    <Text style={[ styles.prtext ]}>{item.description}</Text>
    <View style={{width:'100%'}}>
      <Text style={[ styles.prtext ]}>Status: 
      <Animated.Image source={require('../res/thumbsup.gif')} style={{width:33, height:33}} />
      </Text>
    </View>
  </View>
)
export default Project;
*/
Project.propTypes = {
  item: PropTypes.object.isRequired,
  highlighted: PropTypes.bool,
  onPress:PropTypes.func,
  index:PropTypes.number
 };
 Project.defaultProps = {
  highlighted: false,
  item: null,
  onPress:null,
  index:0
 };
 
const styles = {
  prtext: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    opacity: 1.0
  },
  prtextname: {
    fontWeight: 'bold',
    fontSize: 30
  },
  prstatus: {

  },
  pr: {
    margin: 20,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,    
    backgroundColor: '#e8b566',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    opacity: 0.8
  },
  incomingPr: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7'
  },
  hidden: {
    width: 0,
    height: 0,
    marginRight: 0,
  },
  img: {
    width: 18,
    height: 18,
    marginRight: 19,
  },
  highlighted: {
    backgroundColor: '#66c18e',
//    transform: [{ rotateX: '33deg'},{ scale: 1.1}]
/*    transform: [
//      { perspective: 850 },
//      { translateX: - Dimensions.get('window').width * 0.24 },
      { rotateX: '30deg' },
    ],*/
  },
  unhighlighted: {
//    transform: [{ rotateX: '0deg'}]
    /*transform: [
      { rotateX: '00deg' },
    ],*/
  }  
}
