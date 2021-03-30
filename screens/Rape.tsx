import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function Rape() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        {/* <ScrollView style={styles.scrollView}> */}
          <Card style = {styles.container2}>
            <Card.Content>
                <Paragraph style = {styles.paragraph}>A man, is said to commit rape, who has sexual intercourse with a woman under circumstances falling under any of the five following descriptions:</Paragraph>
                <Paragraph style = {styles.paragraph2}>(i)	against her will,</Paragraph>
                <Paragraph style = {styles.paragraph2}>(ii)	without her consent,</Paragraph>
                <Paragraph style = {styles.paragraph2}>(iii)	with her consent, when the consent has been obtained by putting her in fear of death or of hurt,</Paragraph>
                <Paragraph style = {styles.paragraph2}>(iv)	with her consent, when the man knows that he is not married to her and that the consent is given because she believes that the man is another person to whom she is or believes herself to be married; or</Paragraph>
                <Paragraph style = {styles.paragraph2}>(v)	With or without her consent when she is under sixteen years of age.</Paragraph>
                <Paragraph style = {styles.paragraph}>Explanation: Penetration is sufficient to constitute the sexual intercourse necessary to the offence of rape.</Paragraph>
                <Title style = {styles.title}>Punishment for Rape</Title>
                <Paragraph style = {styles.paragraph}>1. Whoever commits rape shall be punished with death or imprisonment of either description for a term which shall not be less than ten rears or more, than twenty-five years and shall also be liable to fine.</Paragraph>
                <Paragraph style = {styles.paragraph}>2. When rape is committed by two or more persons in furtherance of common intention of all, each of such persons shall be punished with death or imprisonment for life.".</Paragraph>
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

