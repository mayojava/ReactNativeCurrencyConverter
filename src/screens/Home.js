import React from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/container';
import { Logo } from '../components/Logo';
import { TextInputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Headers';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_BASE_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {
  handlePressBaseCurrency = () => {
    console.log('press base currency');
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote currency');
  };

  handleChangeText = (text) => {
    console.log('change text: ', text);
  };

  handleSwapCurrency = () => {};

  handleOptionPress = () => {};

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <TextInputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <TextInputWithButton
            buttonText={TEMP_BASE_QUOTE_CURRENCY}
            editable={false}
            onPress={this.handlePressQuoteCurrency}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_BASE_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse currency"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
