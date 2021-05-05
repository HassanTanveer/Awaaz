import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

import { Text, View } from "../components/Themed";
import Loading from "../components/Loading";

import firebase from "firebase/app";
import { set } from "react-native-reanimated";
import { Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
// eslint-disable-next-line no-undef
require("firebase/auth");
// eslint-disable-next-line no-undef
require("firebase/firestore");

export default function Description(props) {
	let db = firebase.firestore();
	const [Description, setDescription] = useState([]);
	const [Heading, setHeading] = useState([]);

	useEffect(() => {
		let data = db.collection(props.route.params.type);
		data.get().then((res) => {
			setDescription(res.docs[1].data())
			setHeading(res.docs[0].data()) 
		});
	}, []);

	if (!Description.content) {
		return <Loading />;
	} else {
		return (
			<View style={styles.container}>
				<View style={styles.card}>
					<Card style={styles.container2}>
						<Card.Content>
							<Title style={styles.title}>
								{Heading.heading}
							</Title>
							{Description.content.map((text, index) => {
								return (
									<View key={index}>
										<Text style={styles.content}>
											<Text style={styles.bold}>{index+1}.</Text> {text}
										</Text>
										<Text> </Text>
									</View>
								);
							})}
						</Card.Content>
					</Card>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bold: {
		fontFamily: "Montserrat_700Bold"
	},
	content: {
		fontFamily: "Montserrat_400Regular",
		fontSize: 16
	},
	container: {
		flex: 1,
		
	},
	card: {
		margin: 5,
		shadowOffset: { width: 0, height: 1 },
		shadowColor: "#F1D4D4",
		shadowOpacity: 100,
		shadowRadius: 4,
		elevation: 3,
		width: "96%",
		alignSelf: "center",
		alignContent: "center"
	},
	container2: {
		shadowOffset: { width: 0, height: 1 },
		shadowColor: "#F1D4D4",
		shadowOpacity: 100,
		shadowRadius: 4,
		elevation: 3,
		
	},
	title: {
		fontFamily: "Montserrat_700Bold",
		fontSize: 21,
		paddingBottom: 20,
		textAlign: "auto"
	},
	paragraph: {
		marginTop: 10,
	},
	none: {
		display: "none",
	}
});
