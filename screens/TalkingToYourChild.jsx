import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function TalkingToYourChild() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        {/* <ScrollView style={styles.scrollView}> */}
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}>Tips For Talking To Your Children About Sexual Harassment</Title>
                <Paragraph style = {styles.content}>1. No matter what, you need to stay calm as you have this conversation! If you freak out, they may think there is something wrong with them (and you) and their trust in you will be reduced.</Paragraph>
                <Paragraph style = {styles.content}>2. Ask them if they’ve heard the words “sexual harassment.” If they say yes, ask them what they think it means.</Paragraph>
                <Paragraph style = {styles.content}>3. Regardless of what they say (even if they are spot on), you need to explain it to them so they learn two things:</Paragraph>
                <Paragraph style = {styles.content2}>(i) You are open and willing to talking about uncomfortable topics.</Paragraph>
                <Paragraph style = {styles.content2}>(ii)Your values about how people should treat each other.</Paragraph>
                <Paragraph style = {styles.content}>4. Keep It Developmentally Appropriate.</Paragraph>
                <Paragraph style = {styles.content}>5. Define Sexual Harassment.</Paragraph>
                <Paragraph style = {styles.content}>6. Teach Your Child to Report It.</Paragraph>
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
	},
	none: {
		display: "none",
	}
});

