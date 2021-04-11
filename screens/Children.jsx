import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function Children() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        {/* <ScrollView style={styles.scrollView}> */}
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}>Cruelty To a child</Title>
                <Paragraph style = {styles.paragraph}>Whoever seduces a child by any means whatsoever with an intent to involve him in any sexual activity or exposes him to obscene and sexually explicit material, document, a film, video, or a computer generated image or attempts to do the aforementioned act, shall be punished with imprisonment of either description for a term which shall not be less than one year and may extend upto seven years.</Paragraph>
                <Title style = {styles.title2}>Exposure to Seduction</Title>
                <Paragraph style = {styles.paragraph}>Whoever willfully assaults, ill-treats, neglects, abandons or does an act of omission or commission, that results in or has, potential to harm or injure the child by causing physical or psychological injury to him shall be punished with imprisonment of either description for a term which shall not be less than one year and may extend upto three years.</Paragraph>
            </Card.Content>
          </Card>
        {/* </ScrollView> */}
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
  },
  container2: {
    // height: 112,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#F1D4D4',
    shadowOpacity: 100,
    shadowRadius: 4,
    elevation: 3
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  title2: {
    marginTop: 10,
    fontSize: 21,
    fontWeight: 'bold'
  },
  paragraph: {
    marginTop: 10
  },
  paragraph2: {
    marginTop: 5,
    marginLeft: 15
  },
  none: {
    display: 'none'
  },
  image: {
    backgroundColor: '#FFFF',
    marginLeft: "85%",
    marginTop: -40,        
    width: 48,
    height: 48
  }
});

