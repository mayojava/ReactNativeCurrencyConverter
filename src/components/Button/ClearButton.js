import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import propType from 'prop-types';

import styles from './style';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.wrapper}>
      <Image
        source={require('./images/icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  text: propType.string.isRequired,
  onPress: propType.func.isRequired,
};

export default ClearButton;
