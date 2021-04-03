import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function CyberHarassment() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>  
        <Card style = {styles.container2}>
          <Card.Content>
              <Title style = {styles.title}> What is Cyber Harassment? </Title>
              <Paragraph style = {styles.paragraph}> 1. Physical acts of sexual assault. </Paragraph>
              <Paragraph style = {styles.paragraph}> 2. Verbal harassment of a sexual nature, including jokes referring to sexual acts or sexual orientation. </Paragraph>
              <Paragraph style = {styles.paragraph}> 3. Making inappropriate sexual gestures and advances. </Paragraph>
              <Paragraph style = {styles.paragraph}> 4. Unwanted sexually explicit photos, emails, or text messages. </Paragraph>
              <Paragraph style = {styles.paragraph}> 5. Unwanted touching or physical contact. </Paragraph>
              <Paragraph style = {styles.paragraph}> 6. Exposing oneself or performing sexual acts on oneself. </Paragraph>
              <Paragraph style = {styles.paragraph}> 7.  Making conditions of employment or advancement dependent on sexual favors, either explicitly or implicitly. </Paragraph>
          </Card.Content>
        </Card>
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
  paragraph: {
    marginTop: 10,
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

