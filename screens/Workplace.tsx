import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MyComponent from '../components/helplineCard';

export default function Workplace() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <ScrollView style={styles.scrollView}>
          <Card style = {styles.container2}>
            <Card.Content>
                <Title style = {styles.title}>Protection Against Harassment of Women at Workplace Act (2010)</Title>
                <Paragraph style = {styles.paragraph}>According to Section 2(h) of the Protection against Harassment of women at Workplace Act, 2010 harassment” means any unwelcome sexual advance, request for sexual favors or other verbal or written communication or physical conduct of a sexual nature or sexually demeaning attitudes, causing interference with work performance or creating an intimidating, hostile or offensive work environment, or the attempt to punish the complainant for refusal to comply with such a request or is made a condition for employment.</Paragraph>
                <Paragraph style = {styles.paragraph}>According to the Section 3 of the Protection against Harassment of women at Workplace Act, 2010, every organization has to constitute an Inquiry Committee to inquire into complaints made against workplace harassment. And committee shall consist of three members of whom at least one member should be a woman.</Paragraph>
                <Paragraph style = {styles.paragraph}>If a person is guilty of workplace harassment, following penalty under Section 4 of the Protection against Harassment of women at Workplace Act, 2010 can be imposed on him:</Paragraph>
                <Paragraph style = {styles.paragraph3}>Minor Penalties:</Paragraph>
                <Paragraph style = {styles.paragraph2}>1. Censure,</Paragraph>
                <Paragraph style = {styles.paragraph2}>2. Withholding for a specific period, promotion or increment,</Paragraph>
                <Paragraph style = {styles.paragraph2}>3. Stoppage for a specific period,</Paragraph>
                <Paragraph style = {styles.paragraph2}>4. Recovery of the compensation payable to the complainant from pay or any other source of the accused.</Paragraph>
                <Paragraph style = {styles.paragraph3}>Major Penalties:</Paragraph>
                <Paragraph style = {styles.paragraph2}>1. Reduction to lower post or time-scale or to a lower stage in a time-scale,</Paragraph>
                <Paragraph style = {styles.paragraph2}>2. Compulsory retirement,</Paragraph>
                <Paragraph style = {styles.paragraph2}>3. Removal from service,</Paragraph>
                <Paragraph style = {styles.paragraph2}>4. Dismissal from service,</Paragraph>
                <Paragraph style = {styles.paragraph2}>5. Fine.</Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>

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
  paragraph3: {
    marginTop: 10,
    fontWeight: 'bold'
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

