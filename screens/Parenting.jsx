import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function Parenting( navigation ) {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('SignsOfHarassment')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Signs Of Harassment </Title>
                <Paragraph style = {styles.paragraph}> Signs In Your Children That May Indicate Harassment </Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('TalkingToYourChild')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Talking To Your Child </Title>
                <Paragraph style = {styles.paragraph}> Talking To Your Child About Harassment </Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('NotFound')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Cartoon Aids </Title>
                <Paragraph style = {styles.paragraph}> Cartoon Aids To Help Explain Harassment To Your Child </Paragraph>
            </Card.Content>
          </Card>
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
      fontFamily: 'Montserrat_700Bold',
      fontSize: 21,
      textAlign: 'center'
  },
  paragraph: {
      fontFamily: 'Montserrat_400Regular',
      textAlign: 'center'
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

