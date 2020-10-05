import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

import Spacer from 'react-native-spacer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          This is an example using react-native-spacer,
          which will automatically calculate and positioning view
          when the keyboard is appear/disapper
        </Text>
        <Spacer style={styles.inputWrapper}>
          <TextInput 
            style={styles.textInput}
            placeholder="Write me something, sexy!"
          />
        </Spacer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight
  },
  paragraph: {
    margin: 24,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#34495e'
  },
  inputWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  textInput: {
    height: 60,
    width: 280,
    padding: 10,
    margin: 20,
    borderWidth: 1,
    borderColor: 'grey'
  }
});
