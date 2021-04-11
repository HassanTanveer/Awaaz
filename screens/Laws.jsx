import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function Laws( navigation ) {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('SexualHarassmentLaw')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Sexual Harassment </Title>
                <Paragraph style = {styles.paragraph}> Laws Related To Sexual Harassment In Women </Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Workplace')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Workplace </Title>
                <Paragraph style = {styles.paragraph}> Harassment Of Women At The Workplace </Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Rape')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Rape </Title>
                <Paragraph style = {styles.paragraph}> Information On Rape In The Pakistan Penal Code </Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Children')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Children </Title>
                <Paragraph style = {styles.paragraph}> Laws For The Protection Of Childrens </Paragraph>
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
      fontSize: 21,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  paragraph: {
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
  },
  
  // container: {
  //   flex: 1,
  // },
  // card: {
  //   margin: 5,
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowColor: '#F1D4D4',
  //   shadowOpacity: 100,
  //   shadowRadius: 4,
  //   elevation: 3
  // },
  // container: {
  //   // height: 112,
  //   // height: 100,
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowColor: '#F1D4D4',
  //   shadowOpacity: 100,
  //   shadowRadius: 4,
  //   elevation: 3,
  // },
  // title: {
  //   fontSize: 21,
  //   fontWeight: 'bold',
  //   textAlign: 'center'
  // },
  // paragraph: {
  //   textAlign: 'center'
  // }
});

