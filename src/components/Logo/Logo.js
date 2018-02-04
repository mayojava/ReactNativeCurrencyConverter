import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.containerImage}
      source={require('./images/background.png')}
      resizeMode="contain"
    >
      <Image
        source={require('./images/logo.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
