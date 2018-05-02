import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, TouchableOpacity, View, StyleSheet, Text, Animated } from 'react-native'

export default class Project extends Component
{
  constructor(props)
  {
    super(props);
  }

  state = {
    highlighted:false
  }
  componentDidMount()
  {
    
  }

  isStatusOK = () => {

    return this.props.item.status != "wip";
  }

  onSelected = () =>
  {
    this.setState({hightlighted:!this.state.highlighted});
    this.props.onPress();
  }

  render() {

    return (
      <TouchableOpacity style={[ styles.pr, !this.state.highlighted ? styles.highlighted : styles.unhighlighted ]} onPress={() => this.onSelected() }>
        <Text style={[ styles.prtext, styles.prtextname ]}>{this.props.item.name}</Text>
        <Text style={[ styles.prtext ]}>{this.props.item.description}</Text>
        <View style={{width:'100%', flex:1, flexDirection: 'row'}}>
          <Text style={[ styles.prtext, styles.prstatus ]}>Status: </Text>
          <Animated.Image source={require('../res/wip3.gif')} style={[styles.img, this.isStatusOK() && styles.hidden ]} />
          <Animated.Image source={require('../res/finished3.gif')} style={[styles.img, !this.isStatusOK() && styles.hidden ]} />
          <Text style={[ styles.prtext, styles.prstatus ]}>  Efforts: </Text>
          <Animated.Image source={require('../res/rainy4.gif')} style={[styles.img, this.isStatusOK() && styles.hidden ]} />
          <Animated.Image source={require('../res/sun3.gif')} style={[styles.img, !this.isStatusOK() && styles.hidden ]} />
        </View>
    </TouchableOpacity>
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
  onPress:PropTypes.func
 };
 Project.defaultProps = {
  highlighted: false,
  item: null,
  onPress:null
 };
 
//TODO: override opacity for text better as "rgba(180, 249, 119, 1.0)"
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
    margin: 10,
    padding: 10,
    backgroundColor: '#e8b566',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    opacity: 0.6
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
    backgroundColor: '#E1FFC7',
    transform: [
//      { perspective: 850 },
//      { translateX: - Dimensions.get('window').width * 0.24 },
      { rotateX: '30deg'},
    ],
  },
  unhighlighted: {
    transform: [
      { rotateX: '0deg'},
    ],
  }  
}
