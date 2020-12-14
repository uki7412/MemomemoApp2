import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';

// eslint-disable-next-line react/prefer-stateless-function
class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2020/11/26</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>講座のアイデアです</Text>
        </View>

        <CircleButton color="white" style={styles.editBotton} onPress={() => {this.props.navigation.navigate('MemoEdit'); }}><FontAwesome name="pencil" size={24} color="orange" /></CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#454545',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    paddingBottom: 20,
    flex: 1,
  },
  editBotton: {
    top: 75,
  },
});

export default MemoDetailScreen;
