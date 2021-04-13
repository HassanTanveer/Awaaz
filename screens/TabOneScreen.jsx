/* eslint-disable no-undef */
import React, { useState } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import * as SMS from "expo-sms";
import { Text, View } from "../components/Themed";
import DisplayAnImage from "../components/AddImage";
import * as Location from "expo-location";
import { Audio } from "expo-av";

export default function TabOneScreen(navigation) {
	// eslint-disable-next-line no-unused-vars
	const [location, setLocation] = useState(null);
	const [SOSText, setSOSText] = useState("SOS");
	// eslint-disable-next-line no-unused-vars
	const [sound, setSound] = React.useState();

	let onPressButton = () => {
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

				let google_maps_link = `https://maps.google.com/?q=${location.coords.latitude},${location.coords.longitude}`;
				console.log(google_maps_link);
				SMS.isAvailableAsync().then(() => {
					SMS.sendSMSAsync(
						["+923244292276"],
						"1This is a test SOS message for my application.\n" +
							`My location is: ${google_maps_link}`
					).then(() => {
						setTimeout(function () {
							setSOSText("Sent");
						}, 3000);
					});
				});
			})();
		} else {
			setSOSText("SOS");
		}
	};

	let stylebox = styles.textBig;

	async function playSound() {
		console.log("Loading Sound");
		const { sound } = await Audio.Sound.createAsync(
			require("../assets/notes_c.wav")
		);
		setSound(sound);

		console.log("Playing Sound");
		await sound.playAsync();
	}

	return (
		<View style={styles.container}>
			<View style={styles.bigbox}>
				<TouchableHighlight
					onPress={() => onPressButton()}
					style={styles.bigInner}
				>
					<View style={styles.appButtonContainer}>
						<Text style={stylebox}>{SOSText}</Text>
						<Text style={styles.textSubtitle}>
							Notify police and your emergency contacts
						</Text>
					</View>
				</TouchableHighlight>
			</View>

			<View style={styles.box}>
				<TouchableHighlight
					onPress={() => navigation.navigation.navigate("Helplines")}
					style={styles.inner}
					activeOpacity={0.6}
					underlayColor='#DDDDDD'
				>
					<View style={styles.appButtonContainer}>
						<Text style={styles.textOne}> Helplines </Text>
						<DisplayAnImage
							image={require("../icons/2x/call.png")}
						></DisplayAnImage>
					</View>
				</TouchableHighlight>
			</View>

			<View style={styles.box}>
				<TouchableHighlight
					onPress={() => {
						playSound();
					}}
					style={styles.inner}
					activeOpacity={0.6}
					underlayColor='#DDDDDD'
				>
					<View style={styles.appButtonContainer}>
						<Text style={styles.textOne}>Alarm</Text>
						<DisplayAnImage
							image={require("../icons/2x/alarm.png")}
						></DisplayAnImage>
					</View>
				</TouchableHighlight>
			</View>

			<View style={styles.box}>
				<TouchableHighlight onPress={() => {}} 
					style={styles.inner}
					activeOpacity={0.6}
					underlayColor='#DDDDDD'>
					<View style={styles.appButtonContainer}>
						<Text style={styles.textOne}>Record</Text>
						<DisplayAnImage
							image={require("../icons/2x/record.png")}
						></DisplayAnImage>
					</View>
				</TouchableHighlight>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	bigbox: {
		marginVertical: 10,
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
		fontWeight: "bold",
		color: "black",
	},
	textBig: {
		fontSize: 21,
		fontWeight: "bold",
		color: "white",
	},
	textSubtitle: {
		fontSize: 15,
		color: "#FFFF",
		opacity: 50,
	},
	appButtonContainer: {
		backgroundColor: "transparent",
		alignItems: "center",
	},
});
