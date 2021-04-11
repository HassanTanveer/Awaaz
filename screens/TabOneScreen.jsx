import React, { useState } from "react";

import { Button, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import DisplayAnImage from '../components/AddImage'

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

export default function TabOneScreen( navigation ) {
  const [SOSText, setSOSText] = useState("SOS");

  let state = {
    textValue: 'Change me'
  }
  let onPressButton = () => {
    if(SOSText == "SOS"){
        setSOSText("Sent");
    }
    else{
      setSOSText("SOS");
    }
  };
  let stylebox = styles.textBig


  return (
    <View style={styles.container}>
      
      <View style={styles.bigbox}>
        <View style={styles.bigInner}>
          <TouchableOpacity onPress={() => navigation.navigation.navigate('Notfound')}  style={styles.appButtonContainer}>
            <Text style={stylebox}>{SOSText}</Text>
            <Text style={styles.textSubtitle}>Notify police and your emergency contacts</Text>  
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigation.navigate('Helplines')}  style={styles.appButtonContainer}>
            <Text style={styles.textOne}> Helplines </Text>
            <DisplayAnImage
              image = {require('../icons/2x/call.png')}>
            </DisplayAnImage>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner} >
          <TouchableOpacity onPress={() => {}}  style={styles.appButtonContainer}>
            <Text style={styles.textOne}>Alarm</Text>
            <DisplayAnImage
              image = {require('../icons/2x/alarm.png')}>
            </DisplayAnImage>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => {}}  style={styles.appButtonContainer}>
            <Text style={styles.textOne}>Record</Text>
            <DisplayAnImage
            image = {require('../icons/2x/record.png')}>
            </DisplayAnImage>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
    },
    bigbox: {
      marginVertical: 10,
      width: "98%",
      height: "20%",
    },
    box: {
    width: "33%",
    height: "20%",
    paddingHorizontal: '1%',
    marginTop: 10,
    },
    bigInner: {
      flex: 1,
      backgroundColor: '#CC0E3C',
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: { width: 0, height: 1 },
      shadowColor: '#F1D4D4',
      shadowOpacity: 100,
      shadowRadius: 4,
      elevation: 4,
    },
    inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#F1D4D4',
    shadowOpacity: 100,
    shadowRadius: 4,
    elevation: 3,
    },
    textOne: {
      fontSize: 21,
      fontWeight: "bold",
      color: "black"
    },
    textBig: {
      fontSize: 21,
      fontWeight: "bold",
      color: "white"
    },
    textSubtitle: {
      fontSize: 15,
      color: "#FFFF",
      opacity: 50
    },
    appButtonContainer: {
      alignItems: "center"
    },
});
