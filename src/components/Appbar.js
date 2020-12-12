/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
class Appbar extends React.Component {
  render() {
    return (

      // eslint-disable-next-line react/jsx-filename-extension
      <View style={styles.appbar}>
        <Text style={styles.appbarTitle}>
          MEMOMEMO
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,

  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Appbar;
