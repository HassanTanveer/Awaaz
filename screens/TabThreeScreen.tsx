import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';
import { Checkbox } from 'react-native-paper';

export default function TabTwoScreen( navigation: { navigate: (arg0: string) => void; } ) {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('SupportGroups')}  style={styles.appButtonContainer}>
          <MyComponent
            name="Support Groups" 
            content="Share your story with the community"
            image = {require('../icons/2x/baseline_groups_black_36dp.png')}
          ></MyComponent>
        </TouchableOpacity>
      </View>

      <View style={styles.card}> 
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Therapists')}  style={styles.appButtonContainer}>
          <MyComponent 
            name="Contact a Therapist" 
            content="Get counselling from a professional"
            image = {require('../icons/2x/therapist.png')}
          ></MyComponent>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Lawyers')}  style={styles.appButtonContainer}>
          <MyComponent
            name="Contact a Lawyer"
            content="Take legal action against the harasser"
            image = {require('../icons/2x/baseline_museum_black_36dp.png')}
          ></MyComponent> 
        </TouchableOpacity>
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
