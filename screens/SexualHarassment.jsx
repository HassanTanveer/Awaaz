import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View } from '../components/Themed';


export default function SexualHarassment() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>  
        <Card style = {styles.container2}>
          <Card.Content>
              <Title style = {styles.title}> Examples of Sexual Harassment </Title>
              <Paragraph style = {styles.content}> 1. Physical acts of sexual assault. </Paragraph>
              <Paragraph style = {styles.content}> 2. Verbal harassment of a sexual nature, including jokes referring to sexual acts or sexual orientation. </Paragraph>
              <Paragraph style = {styles.content}> 3. Making inappropriate sexual gestures and advances. </Paragraph>
              <Paragraph style = {styles.content}> 4. Unwanted sexually explicit photos, emails, or text messages. </Paragraph>
              <Paragraph style = {styles.content}> 5. Unwanted touching or physical contact. </Paragraph>
              <Paragraph style = {styles.content}> 6. Exposing oneself or performing sexual acts on oneself. </Paragraph>
              <Paragraph style = {styles.content}> 7.  Making conditions of employment or advancement dependent on sexual favors, either explicitly or implicitly. </Paragraph>
          </Card.Content>
        </Card>
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

