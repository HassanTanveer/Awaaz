import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function Reporting() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <ScrollView style={styles.scrollView}>
          <Card style = {styles.container2}>
            <Card.Content>
                {/* <Title style = {styles.title}> Examples of Harassment </Title> */}
                <Paragraph style = {styles.paragraph}>It is recommended that you should follow these steps whenever you encounter sexual harassment. </Paragraph>
                <Paragraph style = {styles.paragraph}>1. You need to make it clear to harasser that you don’t like his/her advances (his advances are unwelcome/unwarranted), </Paragraph>
                <Paragraph style = {styles.paragraph}>2. Even if you don’t want to make a formal complaint, do inform some trustworthy colleague in your organization, </Paragraph>
                <Paragraph style = {styles.paragraph}>3. If you want to lodge a complaint in an informal way, you or your designated person can informally report this incident to your supervisor or inquiry committee, </Paragraph>
                <Paragraph style = {styles.paragraph}>4. You can also launch a formal complaint to your supervisor or inquiry committee through your supervisor, CBA (union) nominee or worker representative (in case of absence of union),  </Paragraph>
                <Paragraph style = {styles.paragraph}>5. For filing a formal complaint, you have three options: </Paragraph>
                <Paragraph style = {styles.paragraph2}>i) Either report the incident to Inquiry Committee, constituted within your organization (Section 4) </Paragraph>
                <Paragraph style = {styles.paragraph2}>ii) Report directly to Federal/Provincial Ombudsman, appointed under this act (Section 8) </Paragraph>
                <Paragraph style = {styles.paragraph2}>iii) Report directly to Police (under Section 509 of PPC) </Paragraph>
                <Paragraph style = {styles.paragraph2}>It is better to initiate complaint inside your organization. </Paragraph>
                <Paragraph style = {styles.paragraph}>6. If you are not satisfied with decision of inquiry committee and competent authority (of your organization), you can appeal to Ombudsman or a District Court (in case, Ombudsmen are not appointed) </Paragraph>
                <Paragraph style = {styles.paragraph}>7. If you are still aggrieved by decision of Ombudsman/District Court, you can make a representation to President or Governor for justice. </Paragraph>
                <Paragraph style = {styles.paragraph}>If must be reminded that appeal option is available to all parties i.e., both accused and victim can appeal against decisions. </Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>

      {/* <View style={styles.card}>
        <Card style = {styles.container}>
          <Card.Content>
              <Title style = {styles.title}> Examples of Harassment </Title>
              <Paragraph> 1. Using racist slangs, phrases or nicknames. </Paragraph>
              <Paragraph> 2. Making negative comments about an employee's personal religious beliefs, or trying to convert them to a certain religious ideology. </Paragraph>
              <Paragraph> 3. Making offensive reference to an individual's mental or physical disability. </Paragraph>
              <Paragraph> 4. Sharing inappropriate images, videos, emails, letters, or notes. </Paragraph>
              <Paragraph> 5. Ridiculing someone and sharing inappropriate jokes.  </Paragraph>
              <Paragraph> 6. Making remarks about an individual's skin color or other ethnic traits. </Paragraph>
          </Card.Content>
        </Card>
      </View> */}

    </View>
  );
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
    // height: 112,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#F1D4D4',
    shadowOpacity: 100,
    shadowRadius: 4,
    elevation: 3
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  paragraph: {
    marginTop: 10
  },
  paragraph2: {
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
  // card: {
  //   margin: 5,
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowColor: '#F1D4D4',
  //   shadowOpacity: 100,
  //   shadowRadius: 4,
  //   elevation: 3
  // },
  // container: {
  //   height: 100,
  //   // height: 100,
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowColor: '#F1D4D4',
  //   shadowOpacity: 100,
  //   shadowRadius: 4,
  //   elevation: 3,
  // },
  // title: {
  //   fontSize: 21,
  //   fontWeight: 'bold',
  //   // textAlign: 'center'
  // },
  // // paragraph: {
  // //   // textAlign: 'center'
  // // }
});

