import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function SignsOfHarassment() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        {/* <ScrollView style={styles.scrollView}> */}
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}> These could be the signs that a child is facing harassment </Title>
                <Paragraph style = {styles.content}>A child who's being abused may feel guilty, ashamed or confused. He or she may be afraid to tell anyone about the abuse, especially if the abuser is a parent, other relative or family friend. That's why it's vital to watch for red flags, such as:</Paragraph>
                <Paragraph style = {styles.content}>1. Withdrawal from friends or usual activities.</Paragraph>
                <Paragraph style = {styles.content}>2. Changes in behavior — such as aggression, anger, hostility or hyperactivity — or changes in school performance.</Paragraph>
                <Paragraph style = {styles.content}>3. Depression, anxiety or unusual fears, or a sudden loss of self-confidence.</Paragraph>
                <Paragraph style = {styles.content}>4. An apparent lack of supervision.</Paragraph>
                <Paragraph style = {styles.content}>5. Frequent absences from school.</Paragraph>
                <Paragraph style = {styles.content}>6. Reluctance to leave school activities, as if he or she doesn't want to go home.</Paragraph>
                <Paragraph style = {styles.content}>7. Self-harm or attempts at suicide.</Paragraph>
            </Card.Content>
          </Card>
        {/* </ScrollView> */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontFamily: "Montserrat_700Bold"
  },
  content: {
		fontFamily: "Montserrat_400Regular",
		fontSize: 16,
    marginBottom: 25
	},
  content2: {
		fontFamily: "Montserrat_400Regular",
		fontSize: 14,
    marginBottom: 25,
    left: 20
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
    textAlign: "center"
	},
	none: {
		display: "none",
	}
});


