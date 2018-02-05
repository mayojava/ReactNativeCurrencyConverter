import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import PropType from 'prop-types';

import styles from './styles';

const LastConverted = ({
 base, quote, conversionRate, date 
}) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of{' '}
    {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: PropType.object.isRequired,
  base: PropType.string.isRequired,
  quote: PropType.string.isRequired,
  conversionRate: PropType.number.isRequired,
};

export default LastConverted;
