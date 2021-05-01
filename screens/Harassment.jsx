import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { Text, View } from '../components/Themed';

import firebase from "firebase/app";
import { set } from "react-native-reanimated";
// eslint-disable-next-line no-undef
require('firebase/auth')
// eslint-disable-next-line no-undef
require('firebase/firestore')

export default function Harassments() {

  let db = firebase.firestore();
  const [Description, setDescription] = useState([{"desc": ""}]);
  
  useEffect(() => {
    let data = db.collection("harassment")
    data.get()
      .then((res) => {
        res.docs.map(doc => {
          if(Description.length < 7){
            setDescription(prev => [...prev, doc.data()])
          }
        })
      })
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.card}>  
        <Card style = {styles.container2}>
          <Card.Content>
              <Title style = {styles.title}> Examples of Harassment </Title>
              {
                Description.map((text, index) => {
                  return(
                    <View key={index}> 
                      <Text style={styles.content}>{text.desc}</Text>
                      <Text> </Text>
                    </View>
                  )       
                })
              }
              {/* <Paragraph style = {styles.paragraph}> 1. Using racist slangs, phrases or nicknames. </Paragraph>
              <Paragraph style = {styles.paragraph}> 2. Making negative comments about an employee's personal religious beliefs, or trying to convert them to a certain religious ideology. </Paragraph>
              <Paragraph style = {styles.paragraph}> 3. Making offensive reference to an individual's mental or physical disability. </Paragraph>
              <Paragraph style = {styles.paragraph}> 4. Sharing inappropriate images, videos, emails, letters, or notes. </Paragraph>
              <Paragraph style = {styles.paragraph}> 5. Ridiculing someone and sharing inappropriate jokes.  </Paragraph>
              <Paragraph style = {styles.paragraph}> 6. Making remarks about an individual's skin color or other ethnic traits. </Paragraph> */}
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    maxWidth: "80%",
  },
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
  // card: {
  //   margin: 5,
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowColor: '#F1D4D4',
  //   shadowOpacity: 100,
  //   shadowRadius: 4,
  //   elevation: 3
  // },
  // container: {
  //   height: 100,
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
  //   // textAlign: 'center'
  // },
  // // paragraph: {
  // //   // textAlign: 'center'
  // // }
});

