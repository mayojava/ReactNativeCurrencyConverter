import React from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends React.Component {
  handlePress = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

CurrencyList.propTypes = {
  navigation: PropTypes.object,
};

CurrencyList.defaultProps = {
  navigation: {},
};

export default CurrencyList;
