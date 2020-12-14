/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style, color, onPress } = this.props;

    let bgColor = 'orange';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = 'orange';
    }
    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
          <Text style={[styles.circleButtonTitle, { color: textColor }]}>
            {this.props.children}
          </Text>
        </View>
      </TouchableHighlight>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },

});

export default CircleButton;