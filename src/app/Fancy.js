import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { styles } from './styles';

export class Fancy extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.box}>
      </View>
      <Text>Fancy</Text>
    </View>)
  }
}

