import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyComponent = (props) => (
    
    <Card style = {styles.container}>
        <Card.Content>
        <Title style = {styles.title}>{props.name}</Title>
        <Paragraph>{props.content}</Paragraph>
        </Card.Content>
        <Card.Cover source = {props.image}  style={styles.image}/>
        <Card.Actions>
        <Button>{props.firstButton}</Button>
        <Button>{props.secondButton}</Button>
        </Card.Actions>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        height: 112,
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
  
export default MyComponent;