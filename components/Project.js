import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

//TODO: cloudy or sunny!

const Project = ({ item }) => (
  <View style={[
      styles.pr, item.i &&
      styles.incomingPr
    ]}>
    <Text style={[ styles.prtext ]}>{item.name}</Text>
    <Text style={[ styles.prtext ]}>{item.description}</Text>
  </View>
)

const styles = {
  prtext: {
    color:"white"
  },
  pr: {
    width: '70%',
    margin: 10,
    padding: 10,
    backgroundColor: '#e8b566',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10
  },
  incomingPr: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7'
  }
}

export default Project;
