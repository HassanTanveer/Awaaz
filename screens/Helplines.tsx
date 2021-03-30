import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function Lawyers() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <MyComponent 
          name="Punjab Women" 
          content="abcdef"
          image = {require('../images/punjabw.png')}
        // firstButton = "call"
        ></MyComponent> 
      </View>

      <View style={styles.card}>
        <MyComponent 
          name="Punjab Women"
          content="abcdef"
          image = {require('../images/punjabw.png')}
        ></MyComponent> 
      </View>

      <View style={styles.card}>
        <MyComponent 
          name="Punjab Women"
          content="abcdef"
          image = {require('../images/punjabw.png')}
        ></MyComponent> 
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#F1D4D4',
    shadowOpacity: 100,
    shadowRadius: 4,
    elevation: 3
  }
});
