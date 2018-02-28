import React from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static defaultProps = {
    navigation: {},
  };

  handleThemePress = () => {
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
    Linking.openURL('htddtp://fixer.io').catch(() =>
      this.props.alertWithType(
        'error',
        'Sorry!',
        'Fixer.io cant be opened right now',
      ),);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
