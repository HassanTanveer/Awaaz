import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { Text, View } from "../components/Themed";
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
                <Text style = {styles.title1}>It is recommended that you should follow these steps whenever you encounter sexual harassment. </Text>
                <Text style = {styles.paragraph}>1. You need to make it clear to harasser that you don’t like his/her advances (his advances are unwelcome/unwarranted), </Text>
                <Text style = {styles.paragraph}>2. Even if you don’t want to make a formal complaint, do inform some trustworthy colleague in your organization, </Text>
                <Text style = {styles.paragraph}>3. If you want to lodge a complaint in an informal way, you or your designated person can informally report this incident to your supervisor or inquiry committee, </Text>
                <Text style = {styles.paragraph}>4. You can also launch a formal complaint to your supervisor or inquiry committee through your supervisor, CBA (union) nominee or worker representative (in case of absence of union),  </Text>
                <Text style = {styles.paragraph}>5. For filing a formal complaint, you have three options: </Text>
                <Text style = {styles.paragraph2}>i) Either report the incident to Inquiry Committee, constituted within your organization (Section 4) </Text>
                <Text style = {styles.paragraph2}>ii) Report directly to Federal/Provincial Ombudsman, appointed under this act (Section 8) </Text>
                <Text style = {styles.paragraph2}>iii) Report directly to Police (under Section 509 of PPC) </Text>
                <Text style = {styles.paragraph2}>It is better to initiate complaint inside your organization. </Text>
                <Text style = {styles.paragraph}>6. If you are not satisfied with decision of inquiry committee and competent authority (of your organization), you can appeal to Ombudsman or a District Court (in case, Ombudsmen are not appointed) </Text>
                <Text style = {styles.paragraph}>7. If you are still aggrieved by decision of Ombudsman/District Court, you can make a representation to President or Governor for justice. </Text>
                <Text style = {styles.paragraph}>If must be reminded that appeal option is available to all parties i.e., both accused and victim can appeal against decisions. </Text>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#F1D4D4',
    shadowOpacity: 100,
    shadowRadius: 4,
    elevation: 3
  },
  container2: {
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#F1D4D4',
    shadowOpacity: 100,
    shadowRadius: 4,
    elevation: 3
  },
  title1: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 21,
  },
  paragraph: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'justify',
    fontSize: 16,
    marginTop: 10
  },
  paragraph2: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'justify',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 15
  },
  none: {
    display: 'none'
  },
  image: {
    backgroundColor: '#FFFF',
    marginLeft: "85%",
    marginTop: -40,        
    width: 48,
    height: 48
  }
});

