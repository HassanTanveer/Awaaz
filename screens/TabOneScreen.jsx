/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import * as SMS from "expo-sms";
import { Text, View } from "../components/Themed";
import DisplayAnImage from "../components/AddImage";
import * as Location from "expo-location";
import { Audio } from "expo-av";
import {
	useFonts,
	Montserrat_400Regular,
	Montserrat_700Bold,
	Montserrat_300Light,
} from "../node_modules/@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");

export default function TabOneScreen(navigation) {

	let [fontsLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_700Bold,
		Montserrat_300Light,
	});

	// eslint-disable-next-line no-unused-vars
	const [location, setLocation] = useState(null);
	const [SOSText, setSOSText] = useState("SOS");
	const [sound, setSound] = React.useState(undefined);
	const [soundName, setSoundName] = React.useState("Siren");
	const [number, setNumber] = React.useState();
	const [recording, setRecording] = React.useState();
	const [recordName, setRecordName] = React.useState("Record");
	const [subtitle, setSubtile] = React.useState("Notify your emergency contact");

	let onPressButton = () => {
		let f = new Promise(function(myResolve, myReject) {
			let result = firebase.auth().currentUser;
			if(result !== null){
				myResolve(result); // when successful
			}
		});

		if (SOSText == "SOS") {
			setSOSText("Sending...");

			(async () => {
				let { status } = await Location.requestPermissionsAsync();
				if (status !== "granted") {
					console.log("Permission to access location was denied");
					return;
				}

				let location = await Location.getCurrentPositionAsync({});
				setLocation(location);
				
				f.then((result) => {
					firebase
					.database()
					.ref("/users" + result.uid)
					.get()
					.then((snapshot) => {
						if (snapshot.exists()) {
							setNumber(snapshot.val().emerygency);
							let google_maps_link = `https://maps.google.com/?q=${location.coords.latitude},${location.coords.longitude}`;
							// console.log(google_maps_link);
							SMS.isAvailableAsync().then(() => {
								SMS.sendSMSAsync(
									[snapshot.val().emerygency],
									"This is a test SOS message for my application.\n" +
										`My location is: ${google_maps_link}`
								)
								.then(() => {
									setTimeout(function () {
										setSOSText("Sent");
										setSubtile("")
									}, 2000);
								})
								.catch((err)=>console.log(err))
							});
							// console.log(snapshot.val().emerygency);
						} else {
							console.log("No data available");
						}
					})
					.catch((error) => {
						console.error(error);
					});
				})
				
			})();
		} else {
			setSOSText("SOS");
			setSubtile("Notify your emergency contact")
		}
	};

	let stylebox = styles.textBig;

	async function playSound() {
		console.log("Loading Sound");
		setSoundName("Playing")
		const { sound } = await Audio.Sound.createAsync(
			require("../assets/notes_c.wav")
		);
		setSound(sound);

		console.log("Playing Sound");
		await sound.playAsync();
	}

	async function stopSound() {
		setSoundName("Siren")
		setSound(undefined);
		await sound.stopAsync();
	}

	async function startRecording() {
		try {
			console.log("Requesting permissions..");
			await Audio.requestPermissionsAsync();
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: true,
				playsInSilentModeIOS: true,
			});
			console.log("Starting recording..");
			const recording = new Audio.Recording();
			await recording.prepareToRecordAsync(
				Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
			);
			await recording.startAsync();
			setRecording(recording);
			setRecordName("Recording");
			console.log("Recording started");
		} catch (err) {
			console.error("Failed to start recording", err);
		}
	}

	async function stopRecording() {
		console.log("Stopping recording..");
		setRecording(undefined);
		setRecordName("Record");
		await recording.stopAndUnloadAsync();
		const uri = recording.getURI();
		console.log("Recording stopped and stored at", uri);
		alert("Recording Saved.");
	}

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
	return (
		<View style={styles.container}>
			<View style={styles.bigbox}>
				<TouchableHighlight
					onPress={() => onPressButton()}
					style={styles.bigInner}>

					<View style={styles.appButtonContainer}>
						<Text style={stylebox}>{SOSText}</Text>
						<Text style={styles.textSubtitle}>
							{subtitle}
						</Text>
						
					</View>
				</TouchableHighlight>
			</View>

			{SOSText == "Sent" ? 
				<TouchableHighlight 
					onPress={() => onPressButton()}
					style={styles.backButton}>
					<View style={styles.backText}>
						<Text style={styles.goBack}> 
							Go back
						</Text>
					</View>
				</TouchableHighlight>
			:
				<View></View>
			}

			<View style={styles.box}>
				<TouchableHighlight
					onPress={() => navigation.navigation.navigate("Helplines")}
					style={styles.inner}
					activeOpacity={0.6}
					underlayColor='#DDDDDD'>
					<View style={styles.appButtonContainer}>
						<Text style={styles.textOne}> Helplines </Text>
						<DisplayAnImage
							image={require("../icons/2x/call.png")}></DisplayAnImage>
					</View>
				</TouchableHighlight>
			</View>

			<View style={styles.box}>
				<TouchableHighlight
					onPress={() => {
						if (sound) {
							stopSound();
						} else {
							playSound();
						}
					}}
					style={styles.inner}
					activeOpacity={0.6}
					underlayColor='#DDDDDD'>
					<View style={styles.appButtonContainer}>
						<Text style={styles.textOne}>{soundName}</Text>
						<DisplayAnImage
							image={require("../icons/2x/alarm.png")}></DisplayAnImage>
					</View>
				</TouchableHighlight>
			</View>

			<View style={styles.box}>
				<TouchableHighlight
					onPress={() => {
						if (recording) {
							stopRecording();
						} else {
							startRecording();
						}
					}}
					style={styles.inner}
					activeOpacity={0.6}
					underlayColor='#DDDDDD'>
					<View style={styles.appButtonContainer}>
						<Text style={styles.textOne}>{recordName}</Text>
						{recording ? (
							<DisplayAnImage
								image={require("../icons/2x/stop.png")}></DisplayAnImage>
						) : (
							<DisplayAnImage
								image={require("../icons/2x/record.png")}></DisplayAnImage>
						)}
					</View>
				</TouchableHighlight>
			</View>
		</View>
	);
	}
}

const styles = StyleSheet.create({
	backButton: {
		backgroundColor: "#CC0E3C",
		width: "98%",
		height: 0
	},
	backText: {
		backgroundColor: "#CC0E3C",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		bottom: 20
	},
	goBack: {
		color: "white",
		fontSize: 16,
		fontFamily: "Montserrat_400Regular"
	},
	container: {
		height: "100%",
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	bigbox: {
		marginTop: 10,
		width: "98%",
		height: "20%",
	},
	box: {
		width: "33%",
		height: "20%",
		paddingHorizontal: "1%",
		marginTop: 10,
	},
	bigInner: {
		flex: 1,
		backgroundColor: "#CC0E3C",
		alignItems: "center",
		justifyContent: "center",
		shadowOffset: { width: 0, height: 1 },
		shadowColor: "#F1D4D4",
		shadowOpacity: 100,
		shadowRadius: 4,
		elevation: 4,
	},
	inner: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FFF",
		shadowOffset: { width: 0, height: 1 },
		shadowColor: "#F1D4D4",
		shadowOpacity: 100,
		shadowRadius: 4,
		elevation: 3,
	},
	textOne: {
		fontSize: 21,
		fontFamily: "Montserrat_700Bold",
		color: "black",
	},
	textBig: {
		fontSize: 21,
		fontFamily: "Montserrat_700Bold",
		color: "white",
	},
	textSubtitle: {
		fontFamily: "Montserrat_400Regular",
		fontSize: 15,
		color: "#FFFF",
		opacity: 50,
	},
	appButtonContainer: {
		backgroundColor: "transparent",
		alignItems: "center",
	},
});
