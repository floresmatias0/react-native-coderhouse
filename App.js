/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import List from './src/components/organisms/List';

const App = () => {
  return (
      <View style={styles.container}>
        <List/>
      </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});

export default App;
