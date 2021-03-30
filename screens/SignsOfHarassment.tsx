import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function SignsOfHarassment() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <ScrollView style={styles.scrollView}>
          <Card style = {styles.container2}>
            <Card.Content>
                {/* <Title style = {styles.title}> Examples of Harassment </Title> */}
                <Paragraph style = {styles.paragraph}>A child who's being abused may feel guilty, ashamed or confused. He or she may be afraid to tell anyone about the abuse, especially if the abuser is a parent, other relative or family friend. That's why it's vital to watch for red flags, such as:</Paragraph>
                <Paragraph style = {styles.paragraph}>1. Withdrawal from friends or usual activities.</Paragraph>
                <Paragraph style = {styles.paragraph}>2. Changes in behavior — such as aggression, anger, hostility or hyperactivity — or changes in school performance.</Paragraph>
                <Paragraph style = {styles.paragraph}>3. Depression, anxiety or unusual fears, or a sudden loss of self-confidence.</Paragraph>
                <Paragraph style = {styles.paragraph}>4. An apparent lack of supervision.</Paragraph>
                <Paragraph style = {styles.paragraph}>5. Frequent absences from school.</Paragraph>
                <Paragraph style = {styles.paragraph}>6. Reluctance to leave school activities, as if he or she doesn't want to go home.</Paragraph>
                <Paragraph style = {styles.paragraph}>7. Self-harm or attempts at suicide.</Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
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

