import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { View } from '../components/Themed';


export default function SexualHarassmentLaw() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <ScrollView style={styles.scrollView}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}>Pakistan Penal Code (1860)</Title>
                <Paragraph style = {styles.content}>Under Section 509 of the Pakistan Penal Code (1860), if a person insults a woman regarding her modesty, whether through gestures or words, the perpetrator can be charged with three years of imprisonment, or with a fine, or both.</Paragraph>
                <Paragraph style = {styles.content}>Under section 496C of the Pakistan Penal Code (1860), anyone making false accusations against another female are to be punished with five years in prison and with a fine.</Paragraph>
                <Paragraph style = {styles.content}>A person who does something that is considered indecent and vulgar, including singing or reciting a song with vulgar lyrics, shall be liable under Section 354A of the Pakistan Penal Code (1860) and shall be imprisoned for three months or may be given a fine or be ordered to do both.</Paragraph>
                <Paragraph style = {styles.content}>A person who assaults a woman, uses physical force against her, or strips her of her clothes for the public to see, shall be liable under Section 354A of the Pakistan Penal Code (1860). The accused may be given a death sentence or imprisoned for life.</Paragraph>
                <Paragraph style = {styles.content}>A person who forces a young girl under the age of eighteen to have sexual intercourse with another person, shall be liable under Section 366A of the Pakistan Penal Code (1860) and charged with ten years of imprisonment or with a fine.</Paragraph>
                <Paragraph style = {styles.content}>According to the Prevention of Electronic Crimes Act (2016), anyone who uses any information to harm another person or their reputation shall be held liable and punished with three years in prison, or with fine, or both.</Paragraph>
                <Paragraph style = {styles.content}>According to the Prevention of Electronic Crimes Act (2016), a person who posts information to tarnish another person???s reputation, especially a female???s reputation, to blackmail or create hatred for the victim, shall be imprisoned for five years, or may be fined for five million rupees, or both.</Paragraph>
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
