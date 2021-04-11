import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from "firebase/app";
require('firebase/auth')

const Login = () => {
    let signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: "80984142514-pk1j1cvjblus6hc4fmafu9obpfrj7kb2.apps.googleusercontent.com",
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }

    let isLoggedIn = false;


    return (
        <View style={styles.container}>
        <Button title="Sign in with Google" onPress={() => signInWithGoogleAsync()}/>
        </View>
    );
};

export default Login;


const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "center"
    }
});
