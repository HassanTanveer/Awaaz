import React, { useState } from "react";

import { StyleSheet, TouchableOpacity, Image } from "react-native";

import { Text, View } from "../components/Themed";
import addEmergencyContact from "../screens/EmergencyContacts";
import * as Google from "expo-google-app-auth";
import firebase from "firebase/app";
// eslint-disable-next-line no-undef
require("firebase/auth");
// eslint-disable-next-line no-undef
require("firebase/database");


import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

export default function TabFourScreen(navigation) {
	const [isLoggedIn, SetisLoggedIn] = useState("false");
	const [currUser, SetcurrUser] = useState("Guest");


	let onSignIn = (googleUser) => {
		navigation.navigation.navigate("SOS");
		// We need to register an Observer on Firebase Auth to make sure auth is initialized.
		var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
			unsubscribe();
			// Check if we are already signed-in Firebase with the correct user.
			if (!isUserEqual(googleUser, firebaseUser)) {
				// Build Firebase credential with the Google ID token.
				var credential = firebase.auth.GoogleAuthProvider.credential(
					googleUser.idToken,
					googleUser.accessToken
				);

				// Sign in with credential from the Google user.
				firebase
					.auth()
					.signInWithCredential(credential)
					.then((result) => {
						firebase
							.database()
							.ref("/users" + result.user.uid)
							.update({
								gmail: result.user.email,
								profile_picture:
									result.additionalUserInfo.profile.picture,
								first_name:
									result.additionalUserInfo.profile
										.given_name,
								last_name:
									result.additionalUserInfo.profile
										.family_name,
                				uid: result.user.uid
							});
					})
					.catch((error) => {
						console.error(error);
					});
			} else {
				navigation.navigation.navigate("SOS");
				console.log("User already signed-in Firebase.");
			}
		});
	};

	let isUserEqual = (googleUser, firebaseUser) => {
		if (firebaseUser) {
			var providerData = firebaseUser.providerData;
			for (var i = 0; i < providerData.length; i++) {
				if (
					providerData[i].providerId ===
						firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
					providerData[i].uid === googleUser.user.id
				) {
					// We don't need to reauth the Firebase connection.
					return true;
				}
			}
		}
		return false;
	};

	let signInWithGoogleAsync = async () => {
		try {
			const result = await Google.logInAsync({
				androidClientId:
					"80984142514-pk1j1cvjblus6hc4fmafu9obpfrj7kb2.apps.googleusercontent.com",
				iosClientId:
					"80984142514-97lhm495snddr3ab4agblm3u9j180cjl.apps.googleusercontent.com",
				scopes: ["profile", "email"],
			});

			if (result.type === "success") {
				firebase.auth().onAuthStateChanged((user) => {
					if (user) {
						SetisLoggedIn("true");
					}
				});
				onSignIn(result);
				return result.accessToken;
			} else {
				return { cancelled: true };
			}
		} catch (e) {
			return { error: true };
		}
	};

	if (isLoggedIn == "true") {
		return (
			<View style={styles.MainContainer}>
				<View style={styles.inside}>
					<Text style={styles.LogOutText}>
						Hello, {firebase.auth().currentUser.displayName}!
					</Text>
					<TouchableOpacity
						style={styles.GooglePlusStyle}
						onPress={() => {
							navigation.navigation.navigate("addEmergencyContact")
						}}>
						<Text style={styles.TextStyle}> Change Emerygency Contact</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.GooglePlusStyle}
						onPress={() => {
							firebase.auth().signOut();
							SetisLoggedIn("false");
							SetcurrUser("Guest");
						}}>
						<Text style={styles.TextStyle}> Sign Out</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	} else {
		return (
			<View style={styles.MainContainer}>
				<View style={styles.inside}>
					<Text style={styles.LoginText}>Hello, {currUser}!</Text>
					<TouchableOpacity
						style={styles.GooglePlusStyle}
						onPress={() => signInWithGoogleAsync()}>
						<Image
							source={require("../images/Google.png")}
							style={styles.ImageIconStyle}
						/>

						<Text style={styles.TextStyle}>
							{" "}
							Sign in with Google
						</Text>
					</TouchableOpacity>

				</View>

				<Image source={require('../assets/login-page1.png')} style={styles.backgroundImage} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imageContainer: {
		alignItems: "center",
		justifyContent: "center",
		alignContent: "center"
	},
	backgroundImage: {
		maxHeight: "50%",
		maxWidth: "100%",
		opacity: 0.6,
		marginTop: 100
  	},
	MainContainer: {
		flex: 1,
		alignItems: "center",
	},
	inside: {
		top: "10%",
	},
	LoginText: {
		fontWeight: "bold",
		fontSize: 22,
		alignSelf: "center",
		marginBottom: 10,
	},

	LogOutText: {
		fontWeight: "bold",
		fontSize: 22,
		marginBottom: 10,
	},

	GooglePlusStyle: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ffe6e6",
		borderWidth: 0.5,
		borderColor: "#FFFF",
		height: 50,
		borderRadius: 5,
		margin: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		width: 200
	},

	ImageIconStyle: {
		padding: 10,
		margin: 5,
		height: 25,
		width: 25,
		resizeMode: "stretch",
	},

	TextStyle: {
		color: "black",
		fontWeight: "bold",
		marginBottom: 4,
	},

	SeparatorLine: {
		backgroundColor: "#FFFF",
		width: 1,
		height: 40,
	},
});
