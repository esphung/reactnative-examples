// FILENAME:  platform-specific.js
// PURPOSE:   platform-specific
// AUTHOR:    Eric Phung
// CREATED:   03/11/2019 06:11 PM
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});
