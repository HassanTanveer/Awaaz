
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  tinyLogo: {
    width: 36,
    height: 36,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={props.image}
      />
    </View>
  );
}

export default DisplayAnImage;