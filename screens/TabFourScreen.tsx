import React, { useState } from "react";

import { Button, StyleSheet, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import DisplayAnImage from '../components/AddImage'
import * as Google from 'expo-google-app-auth';
import firebase from "firebase/app";
require('firebase/auth')

import { relative } from 'node:path';

import Login from "./login"
export default function TabFourScreen( navigation: { navigate: (arg0: string) => void; } ) {
    
    let signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: "80984142514-pk1j1cvjblus6hc4fmafu9obpfrj7kb2.apps.googleusercontent.com",
            iosClientId: "80984142514-97lhm495snddr3ab4agblm3u9j180cjl.apps.googleusercontent.com",
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            navigation.navigation.navigate('SOS')
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }

    let isLoggedIn = false;

    firebase.auth().onAuthStateChanged(user => {
        if(user){
        isLoggedIn = true;
        }
    }) 

    if(isLoggedIn){
        return (
            <View>

            </View>
        )
    } else {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.inside}>
                <Text style={styles.LoginText}>Hello, Guest!</Text>
                <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={1}
                onPress={() => signInWithGoogleAsync()}>
            
                    <Image 
                    source={require('../images/Google.png')} 
                    style={styles.ImageIconStyle} 
                    />
            
                    <View style={styles.SeparatorLine} />
            
                    <Text style={styles.TextStyle}> Sign in with Google</Text>
            
                </TouchableOpacity>
                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    inside:{
        top: "10%",
    },
    LoginText: {
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: "center",
        marginBottom: 10,
    },
    
    GooglePlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFF',
        borderWidth: .5,
        borderColor: "#FFFF",
        height: 40,
        borderRadius: 5 ,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
   },
   
   ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
   
   },
   
   TextStyle :{
   
     color: "black",
     fontWeight: "bold",
     marginBottom : 4,
     marginRight :20,
     
   },
   
   SeparatorLine :{
   
   backgroundColor : '#FFFF',
   width: 1,
   height: 40
   
   }
   
   });