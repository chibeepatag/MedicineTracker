/* eslint-disable */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

export default class MedicineTracker extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('MedicineTracker', () => MedicineTracker);
