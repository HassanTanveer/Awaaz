import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import CallCard from '../components/callCard'


export default function Helplines() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <CallCard 
          name="Punjab Women" 
          content="Anti-Harassment and Violence"
          number="1043"
          image = {require('../images/punjabw.png')}
        ></CallCard> 
      </View>

      <View style={styles.card}>
        <CallCard 
          name="Madadgar National" 
          content="Children and Women Harassment"
          number="1098"
        ></CallCard> 
      </View>

      <View style={styles.card}>
        <CallCard 
          name="Sahil" 
          content="Children Harassment"
          number="0800-13518"
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
