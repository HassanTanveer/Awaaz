import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function SexualHarassmentLaw() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <ScrollView style={styles.scrollView}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}>Pakistan Penal Code (1860)</Title>
                <Paragraph style = {styles.paragraph}>Under Section 509 of the Pakistan Penal Code (1860), if a person insults a woman regarding her modesty, whether through gestures or words, the perpetrator can be charged with three years of imprisonment, or with a fine, or both.</Paragraph>
                <Paragraph style = {styles.paragraph}>Under section 496C of the Pakistan Penal Code (1860), anyone making false accusations against another female are to be punished with five years in prison and with a fine.</Paragraph>
                <Paragraph style = {styles.paragraph}>A person who does something that is considered indecent and vulgar, including singing or reciting a song with vulgar lyrics, shall be liable under Section 354A of the Pakistan Penal Code (1860) and shall be imprisoned for three months or may be given a fine or be ordered to do both.</Paragraph>
                <Paragraph style = {styles.paragraph}>A person who assaults a woman, uses physical force against her, or strips her of her clothes for the public to see, shall be liable under Section 354A of the Pakistan Penal Code (1860). The accused may be given a death sentence or imprisoned for life.</Paragraph>
                <Paragraph style = {styles.paragraph}>A person who forces a young girl under the age of eighteen to have sexual intercourse with another person, shall be liable under Section 366A of the Pakistan Penal Code (1860) and charged with ten years of imprisonment or with a fine.</Paragraph>
                <Paragraph style = {styles.paragraph}>According to the Prevention of Electronic Crimes Act (2016), anyone who uses any information to harm another person or their reputation shall be held liable and punished with three years in prison, or with fine, or both.</Paragraph>
                <Paragraph style = {styles.paragraph}>According to the Prevention of Electronic Crimes Act (2016), a person who posts information to tarnish another person’s reputation, especially a female’s reputation, to blackmail or create hatred for the victim, shall be imprisoned for five years, or may be fined for five million rupees, or both.</Paragraph>
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

