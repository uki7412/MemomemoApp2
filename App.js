import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import firebase from 'firebase';
// import { Platform } from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen';
// import MemoDetailScreen from './src/screens/MemoDetailScreen';
// import MemoEditScreen from './src/screens/MemoEditScreen';
// // import MemoCreateScreen from './src/screens/MemoCreateScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import SignupScreen from './src/screens/SignupScreen';

const App = createStackNavigator({
  Home: { screen: MemoListScreen },
}, {
  defaultNavigationOptions: {
    // ... オプション
  },
});

export default createAppContainer(App);