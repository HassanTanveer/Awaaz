import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function Rape() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <ScrollView style={styles.scrollView}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}>What is considered Rape in law?</Title>
                <Paragraph style = {styles.content}>A man, is said to commit rape, who has sexual intercourse with a woman under circumstances falling under any of the five following descriptions:</Paragraph>
                <Paragraph style = {styles.content2}>(i)	against her will,</Paragraph>
                <Paragraph style = {styles.content2}>(ii)	without her consent,</Paragraph>
                <Paragraph style = {styles.content2}>(iii)	with her consent, when the consent has been obtained by putting her in fear of death or of hurt,</Paragraph>
                <Paragraph style = {styles.content2}>(iv)	with her consent, when the man knows that he is not married to her and that the consent is given because she believes that the man is another person to whom she is or believes herself to be married; or</Paragraph>
                <Paragraph style = {styles.content2}>(v)	With or without her consent when she is under sixteen years of age.</Paragraph>
                <Paragraph style = {styles.content}>Explanation: Penetration is sufficient to constitute the sexual intercourse necessary to the offence of rape.</Paragraph>
                <Title style = {styles.title}>Punishment for Rape</Title>
                <Paragraph style = {styles.content}>1. Whoever commits rape shall be punished with death or imprisonment of either description for a term which shall not be less than ten rears or more, than twenty-five years and shall also be liable to fine.</Paragraph>
                <Paragraph style = {styles.content}>2. When rape is committed by two or more persons in furtherance of common intention of all, each of such persons shall be punished with death or imprisonment for life.".</Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
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
    marginBottom: 20,
    left: 20,
    width: "90%"
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

