/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from "../components/Themed";
import { View } from 'react-native';


const Loading = (props) => (
    <View style={styles.container}>
        <Text style={styles.content}>
            Loading...
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        alignContent: "center",
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 24
    },
  });
  
export default Loading;