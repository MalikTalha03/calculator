import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#23272b',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    borderColor: '#23272b',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 6
  },
});

const Operators = (props) => {
  const {container, buttonText, lastButton} = styles;
  const {button} = style;
  const renderButton = title =>
    title === '+' ? (
      <TouchableOpacity style={[button, lastButton, {width: '700%'}]} onPress={() => props.onClick(title)}>
        <Text style={buttonText}>{title}</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={[button, {width: '700%'}]} onPress={() => props.onClick(title)}>
        <Text style={buttonText}>{title}</Text>
      </TouchableOpacity>
    );

  return (
    <View style={container}>
      {renderButton('/')}
      {renderButton('*')}
      {renderButton('-')}
      {renderButton('+')}
    </View>
  );
};

export default Operators;
