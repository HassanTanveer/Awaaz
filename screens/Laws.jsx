import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title} from 'react-native-paper';

import { Text, View } from '../components/Themed';


export default function Laws( navigation ) {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('SexualHarassmentLaw')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Sexual Harassment </Title>
                <Text style = {styles.paragraph}> Laws Related To Sexual Harassment In Women </Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Workplace')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Workplace </Title>
                <Text style = {styles.paragraph}> Harassment Of Women At The Workplace </Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Rape')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Rape </Title>
                <Text style = {styles.paragraph}> Information On Rape In The Pakistan Penal Code </Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Children')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Children </Title>
                <Text style = {styles.paragraph}> Laws For The Protection Of Childrens </Text>
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

