/*
FILENAME:  MyFacebookLoginScreen.js
PURPOSE:   test fb login on expo
AUTHOR:    Eric Phung
CREATED:   04/04/2020 05:55 PM
UPDATED:   04/04/2020 05:55 PM
*/

import React from 'react';

import {
  View,
  Button,
  Alert,
} from 'react-native';

import * as Facebook from 'expo-facebook';

async function logIn() {
  try {
    await Facebook.initializeAsync(global.facebookAppId); // console.log('global.facebookAppId: ', global.facebookAppId);
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    Alert.alert(`Facebook Login Error: ${message}`);
  }
}

/* Component View */
const MyFacebookLoginScreen = () => {
  const onPress = () => {
    logIn();
    console.log('Pressed Login Btn');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
      <Button title="Facebook Login" onPress={onPress} />
    </View>
  );
};

module.exports = {
  MyFacebookLoginScreen,
};
