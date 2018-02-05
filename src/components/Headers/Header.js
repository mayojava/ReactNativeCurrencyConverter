import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require('./images/gear.png')}
        style={styles.icon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Header;
