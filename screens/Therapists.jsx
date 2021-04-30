import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';

import CallCard from '../components/callCard'

// eslint-disable-next-line no-undef
import firebase from "firebase/app";
// eslint-disable-next-line no-undef
require('firebase/auth')
// eslint-disable-next-line no-undef
require('firebase/firestore')

export default function Therapists() {

  let db = firebase.firestore();
  const [TherapistInfo, setTherapistInfo] = useState([{"empty": "yes"}]);

  useEffect(() => {
    let data = db.collection("therapists")
    data.get()
      .then((res) => {
        res.docs.map(doc => {
            setTherapistInfo(prev => [...prev, doc.data()])
        })
      })
  }, []);

  return (
    <View style={styles.container}>
      {
        TherapistInfo.map((text, index) => {
          return(
            <View key={index}> 
              <View style={styles.card}>
                <CallCard 
                name={text.name}
                content={text.content}
                number={text.number}
                secondButton="Email"
                email={text.email}
                empty={text.empty}
                ></CallCard> 
              </View>
            </View>
          )       
        })
      }
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
  }
});
