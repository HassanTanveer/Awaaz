import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';

import CallCard from '../components/callCard'
import Loading from "../components/Loading";

import firebase from "firebase/app";
require('firebase/auth')
require('firebase/firestore')

export default function Therapists() {

  let db = firebase.firestore();
  const [TherapistInfo, setTherapistInfo] = useState([]);

  useEffect(() => {
    let data = db.collection("therapists")
    data.get()
      .then((res) => {
        res.docs.map(doc => {
            setTherapistInfo(prev => [...prev, doc.data()])
        })
      })
  }, []);

  if(TherapistInfo.length < 1) {
    return <Loading/>
  }
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
