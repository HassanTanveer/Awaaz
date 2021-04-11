import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';
import Lawyers from './Lawyers';

import { createStackNavigator } from '@react-navigation/stack';

import { LawyerList } from '../types';



export default function TabTwoScreen( navigation ) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Awareness')}>
          <MyComponent 
            name = "Awareness" 
            content = "Understand what harassment is"
            image = {require('../icons/2x/bulb.png')}
          ></MyComponent>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Reporting')}>
          <MyComponent
            name = "Reporting"
            content = "Guide on how to report harassment"
            image = {require('../icons/2x/report.png')}
          ></MyComponent>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Parenting')}>
          <MyComponent
            name = "Parenting"
            content = "Awareness for children harassment"
            image = {require('../icons/2x/parenting.png')}
          ></MyComponent>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Laws')}>
          <MyComponent
            name = "Laws"
            content = "Know your legal rights"
            image = {require('../icons/2x/gavel.png')}
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
