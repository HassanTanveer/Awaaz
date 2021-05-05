import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, } from 'react-native-paper';

import { Text, View } from '../components/Themed';

export default function Awareness( navigation ) {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Harassment')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Harassment </Title>
                <Text style = {styles.paragraph}> What does Harassment Look Like? </Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('SexualHarassment')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Sexual Harassment </Title>
                <Text style = {styles.paragraph}> What does Sexual Harassment Look Like? </Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('WorkplaceHarassment')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Workplace Harassment </Title>
                <Text style = {styles.paragraph}> What is harassment in workplace? </Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('CyberHarassment')}  style={styles.appButtonContainer}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> Cyber Harassment </Title>
                <Text style = {styles.paragraph}> What is Cyber Harassment? </Text>
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

