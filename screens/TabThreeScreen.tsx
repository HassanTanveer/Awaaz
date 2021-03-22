import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <MyComponent 
        name="Support Groups" 
        content="Share your story with the community"
        image = {require('../icons/2x/baseline_groups_black_36dp.png')}
        ></MyComponent> 
      </View>

      <View style={styles.card}> 
        <MyComponent 
        name="Contact a Therapist" 
        content="Get counselling from a professional"
        image = {require('../icons/2x/therapist.png')}
        ></MyComponent> 
      </View>
      
      <View style={styles.card}>
        <MyComponent
        name="Contact a Lawyer"
        content="Take legal action against the harasser"
        image = {require('../icons/2x/baseline_museum_black_36dp.png')}
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
