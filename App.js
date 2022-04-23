import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <HomeScreen />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6699CC',
  },
});
