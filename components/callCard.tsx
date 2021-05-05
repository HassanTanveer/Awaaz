import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Linking, Alert, Platform } from "react-native";
import { Text, View } from '../components/Themed';

const CallCard = (props) => (
    props.empty  ?
        <View>

        </View>
    :
	<Card style={styles.container}>
		<Card.Content>
			<Title style={styles.title}>{props.name}</Title>
			<Text style={styles.content}>{props.number}</Text>
			<Text style={styles.content}>{props.content}</Text>
		</Card.Content>
		
        <Card.Cover source = {props.image}  style={styles.image}/>

		<Card.Actions>
			<Button
				onPress={() => {
					let phone = props.number;
					let phoneNumber = phone;
					if (Platform.OS !== "android") {
						phoneNumber = `telprompt:${phone}`;
					} else {
						phoneNumber = `tel:${phone}`;
					}
					Linking.openURL(phoneNumber);
				}}>
				Call
			</Button>
			<Button
				onPress={() => {
					let email = "mailto:" + props.email;
					Linking.openURL(email);
				}}>
				{props.secondButton}
			</Button>
		</Card.Actions>
	</Card>
    
);

const styles = StyleSheet.create({
	container: {
		height: 170,
		shadowOffset: { width: 0, height: 1 },
		shadowColor: "#F1D4D4",
		shadowOpacity: 100,
		shadowRadius: 4,
		elevation: 3,
	},
	content: {
		fontFamily: "Montserrat_400Regular",
		fontSize: 14,
    	marginTop: 5,
		width: "95%"
	},
	title: {
		fontFamily: "Montserrat_700Bold",
		fontSize: 18,
	},
	none: {
		display: "none",
	},
	image: {
        backgroundColor: '#FFFF',
        marginLeft: "85%",
        marginTop: -40,        
        width: 48,
        height: 48
    },
});

export default CallCard;
