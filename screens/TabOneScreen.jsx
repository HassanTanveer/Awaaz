/* eslint-disable no-undef */
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as SMS from 'expo-sms'
import { Text, View } from '../components/Themed';
import DisplayAnImage from '../components/AddImage'
import * as Location from 'expo-location';

export default function TabOneScreen( navigation ) {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState(null);
  const [SOSText, setSOSText] = useState("SOS");
  let onPressButton = () => {
    if(SOSText == "SOS"){
        setSOSText("Sending...");

        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location)

          let google_maps_link = `https://maps.google.com/?q=${location.coords.latitude},${location.coords.longitude}`;
          console.log(google_maps_link)
          SMS.isAvailableAsync()
          .then(() => {
            SMS.sendSMSAsync(
              ['+923244292276'],
              '1This is a test SOS message for my application.\n' + 
              `My location is: ${google_maps_link}`,
            )
            .then(() => {
              setTimeout(function(){ setSOSText('Sent') }, 3000);
            })
          })
        })();
        
        
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
          <TouchableOpacity onPress={() => onPressButton()}  style={styles.appButtonContainer}>
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
