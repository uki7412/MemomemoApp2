/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { createStackNavigator } from 'react-navigation-stack';

// import MemoListScreen from './src/screens/MemoListScreen';

import Appbar from './src/components/Appbar';
import SignupScreen from './src/screens/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <SignupScreen />
    </View>
  );
}

// const App = createStackNavigator({
//   Home: { screen: MemoListScreen },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454545',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});

// export default App;