import React, { useEffect, useState } from "react";

import { StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { Text, View } from "../components/Themed";
import * as Google from "expo-google-app-auth";
import firebase from "firebase/app";
// eslint-disable-next-line no-undef
require("firebase/auth");
// eslint-disable-next-line no-undef
require("firebase/database");


import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

export default function addEmergencyContact(navigation) {

	const [number, onChangeNumber] = useState(null);
	const [Status, setStatus] = useState(null);

	useEffect(() => {
		setStatus(null);

		let f = new Promise(function(myResolve, myReject) {
			let result = firebase.auth().currentUser;
			if(result !== null){
				myResolve(result); // when successful
			}
		});

		f.then((result) => {
				firebase
					.database()
					.ref("/users" + result.uid)
					.get()
					.then((snapshot) => {
						if (snapshot.exists()) {
							onChangeNumber(snapshot.val().emerygency)
							console.log(snapshot.val().emerygency)
						} else {
							console.log("No data available");
						}
						}).catch((error) => {
						console.error(error);
						});
		})

	}, []);

	let addEmergencyContact = (text) => {
        let result = firebase.auth().currentUser;

        firebase
            .database()
            .ref("/users" + result.uid)
            .update({
                "emerygency": text,
            })
		
			onChangeNumber(text)
			
			if(text.length > 10) {
				setStatus("Saved!")
			}
			else{
				setStatus("Please enter a valid number")
			}
    }

	return (
		<View style={styles.MainContainer}>
			<View style={styles.inside}>
				<Text style={styles.Content}>
					Please Add your Emerygency Contact Number
				</Text>
               
				<TextInput
                    style={styles.input}
                    onChangeText = {text => addEmergencyContact(text)}
					value={number}
                    placeholder="Emergency Contact"
                    keyboardType="numeric"
					textAlign = "center"
                />

				{Status == "Saved!" ? 
					<Text style={styles.Subtitle}>
						{Status}
					</Text>	
				
				:
					<Text style={styles.SubtitleInvalid}>
						{Status}
					</Text>
				}
				
			</View>
			
			<Image source={require('../assets/emergency.png')} style={styles.backgroundImage} />

		</View>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		maxHeight: "50%",
		maxWidth: "80%",
		opacity: 0.4,
		top: "-10%"
  	},
    input: {
        height: 60,
        margin: 10,
        borderWidth: 1,
		width: 180,
		borderRadius: 5,
    },
	MainContainer: {
		flex: 1,
		alignItems: "center",
	},
	inside: {
		top: "10%",
		flex: 1,
		alignItems: "center",
		width: "80%"
	},
	Content: {
		fontWeight: "bold",
		fontSize: 16,
		marginBottom: 10,
	},
	Subtitle: {
		color: "green",
	},
	SubtitleInvalid: {
		color: "red",
	}

});
