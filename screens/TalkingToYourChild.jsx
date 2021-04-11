import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function TalkingToYourChild() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        {/* <ScrollView style={styles.scrollView}> */}
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}>Tips For Talking To Your Children About Sexual Harassment</Title>
                <Paragraph style = {styles.paragraph}>1. No matter what, you need to stay calm as you have this conversation! If you freak out, they may think there is something wrong with them (and you) and their trust in you will be reduced.</Paragraph>
                <Paragraph style = {styles.paragraph}>2. Ask them if they’ve heard the words “sexual harassment.” If they say yes, ask them what they think it means.</Paragraph>
                <Paragraph style = {styles.paragraph}>3. Regardless of what they say (even if they are spot on), you need to explain it to them so they learn two things:</Paragraph>
                <Paragraph style = {styles.paragraph2}>(i) You are open and willing to talking about uncomfortable topics.</Paragraph>
                <Paragraph style = {styles.paragraph2}>(ii)Your values about how people should treat each other.</Paragraph>
                <Paragraph style = {styles.paragraph}>4. Keep It Developmentally Appropriate.</Paragraph>
                <Paragraph style = {styles.paragraph}>5. Define Sexual Harassment.</Paragraph>
                <Paragraph style = {styles.paragraph}>6. Teach Your Child to Report It.</Paragraph>
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

