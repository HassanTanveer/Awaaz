import React, { useState, useCallback, useEffect, useLayoutEffect } from "react";
import {GiftedChat, IMessage} from "react-native-gifted-chat";
import firebase from "firebase/app";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native"
import { Card, Title } from "react-native-paper";
require("firebase/auth");
require("firebase/database");

export default function Chat(props) {
	let db = firebase.firestore();
	const [messages, setMessages] = useState([]);
    useLayoutEffect(() => {
        const unsubscribe = db.collection(props.route.params.type).orderBy('createdAt', 'desc').onSnapshot(snapshot => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user

            }))
        ))
        return unsubscribe
    }, [])

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
		const { _id, createdAt, text, user } = messages[0];

		db.collection(props.route.params.type).add({
            _id,
            createdAt,
            text,
            user
        });
	}, []);

	if(firebase.auth().currentUser){
		return (
		
			<GiftedChat
				messages={messages}
				onSend={(messages) => onSend(messages)}
				user={{
					_id: firebase.auth().currentUser.email,
					name: firebase.auth().currentUser.displayName,
				}}
			/>
		);
	}
	else{
		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => props.navigation.navigate("Profile")}
					>
					<Card style={styles.container2}>
						<Card.Content>
							<Title style={styles.title}>
								Please Login to proceed.
							</Title>
						</Card.Content>
					</Card>
				</TouchableOpacity>
			</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		top: 10,
		width: "90%",
		alignSelf: "center",
		textAlign: "center"
	}
});