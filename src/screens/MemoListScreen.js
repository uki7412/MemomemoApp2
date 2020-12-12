import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

// eslint-disable-next-line react/prefer-stateless-function
class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList />
        <CircleButton><Entypo name="plus" size={24} color="white" /></CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
export default MemoListScreen;
