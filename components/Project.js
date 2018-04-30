import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

//TODO: cloudy or sunny!

const Project = ({ item }) => (
  <View style={[
      styles.pr, item.i &&
      styles.incomingPr
    ]}>
    <Text style={[ styles.prtext, styles.prtextname ]}>{item.name}</Text>
    <Text style={[ styles.prtext ]}>{item.description}</Text>
  </View>
)
//TODO: override opacity for text better as "rgba(180, 249, 119, 1.0)"
const styles = {
  prtext: {
    color: "rgba(180, 249, 119, 1.0)",
    fontSize: 20,
    opacity: 1.0
  },
  prtextname: {
    fontWeight: 'bold',
    fontSize: 30
  },  
  pr: {
    margin: 10,
    padding: 10,
    backgroundColor: '#e8b566',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    opacity: 0.2
  },
  incomingPr: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7'
  }
}

export default Project;
