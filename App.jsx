import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import firebase from "firebase/app";

// Firebase details
let firebaseConfig = {
  apiKey: "AIzaSyAUKA6Txf9S7mX6VKs8WAUr5Fg24A45vtI",
  authDomain: "awaaz-9460e.firebaseapp.com",
  projectId: "awaaz-9460e",
  storageBucket: "awaaz-9460e.appspot.com",
  messagingSenderId: "381696994604",
  appId: "1:381696994604:web:a175e854c6ce1031571089",
  measurementId: "G-5NCMWBJLQX"
};
// Initialize Firebase
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } 
  else {
      return (
        <SafeAreaProvider>
          <Navigation/>
          <StatusBar/>
        </SafeAreaProvider>
      );
  }
}
