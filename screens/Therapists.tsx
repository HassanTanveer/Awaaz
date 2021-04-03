import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import CallCard from '../components/callCard'

export default function Therapists() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <CallCard 
          name="Therapist 1" 
          content="abcdef"
          number="1234567"
          secondButton="Email"
          email="abc@def.com"
        ></CallCard> 
      </View>

      <View style={styles.card}>
        <CallCard 
          name="Therapist 1" 
          content="abcdef"
          number="1234567"
          secondButton="Email"
          email="abc@def.com"
        ></CallCard> 
      </View>

      <View style={styles.card}>
        <CallCard 
          name="Therapist 1" 
          content="abcdef"
          number="1234567"
        
        ></CallCard> 
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
