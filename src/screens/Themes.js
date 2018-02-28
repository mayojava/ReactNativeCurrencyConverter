import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Themes extends React.Component {
  handleThemePress = (color) => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <ListItem
          text="blue"
          onPress={() => this.handleThemePress(styles.$blue)}
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />

        <ListItem
          text="Orange"
          onPress={() => this.handleThemePress(styles.$green)}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />

        <ListItem
          text="Green"
          onPress={() => this.handleThemePress(styles.$orange)}
          selected
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />

        <ListItem
          text="Purple"
          onPress={() => this.handleThemePress(styles.$purple)}
          selected
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

Themes.propTypes = {
  navigation: PropTypes.object,
};

Themes.defaultProps = {
  navigation: {},
};

export default Themes;
