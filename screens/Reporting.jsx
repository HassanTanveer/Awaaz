import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { Text, View } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_300Light} from '../node_modules/@expo-google-fonts/montserrat';


export default function Reporting() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <ScrollView style={styles.scrollView}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Text style = {styles.title}>It is recommended that you should follow these steps whenever you encounter sexual harassment. </Text>
                <Text style = {styles.content}>
                  <Text style={styles.bold}>1. </Text>
                  You need to make it clear to harasser that you don’t like his/her advances (his advances are unwelcome/unwarranted), </Text>
                <Text style = {styles.content}>
                  <Text style={styles.bold}>2. </Text> 
                  Even if you don’t want to make a formal complaint, do inform some trustworthy colleague in your organization, </Text>
                <Text style = {styles.content}>
                  <Text style={styles.bold}>3. </Text>
                  If you want to lodge a complaint in an informal way, you or your designated person can informally report this incident to your supervisor or inquiry committee, </Text>
                <Text style = {styles.content}>
                  <Text style={styles.bold}>4. </Text>
                  You can also launch a formal complaint to your supervisor or inquiry committee through your supervisor, CBA (union) nominee or worker representative (in case of absence of union),  </Text>
                <Text style = {styles.content}>
                  <Text style={styles.bold}>5. </Text>
                  For filing a formal complaint, you have three options: </Text>
                <Text style = {styles.content2}><Text style={styles.bold}>i) </Text>Either report the incident to Inquiry Committee, constituted within your organization (Section 4) </Text>
                <Text style = {styles.content2}><Text style={styles.bold}>ii) </Text> Report directly to Federal/Provincial Ombudsman, appointed under this act (Section 8) </Text>
                <Text style = {styles.content2}><Text style={styles.bold}>iii) </Text> Report directly to Police (under Section 509 of PPC) </Text>
                <Text style = {styles.content}><Text style={styles.bold}>6. </Text> If you are not satisfied with decision of inquiry committee and competent authority (of your organization), you can appeal to Ombudsman or a District Court (in case, Ombudsmen are not appointed) </Text>
                <Text style = {styles.content}><Text style={styles.bold}>7. </Text> If you are still aggrieved by decision of Ombudsman/District Court, you can make a representation to President or Governor for justice. </Text>
                <Text style = {styles.content}>If must be reminded that appeal option is available to all parties i.e., both accused and victim can appeal against decisions. </Text>
            </Card.Content>
          </Card>
        </ScrollView>
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

