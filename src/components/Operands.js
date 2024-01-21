import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const Operands = (props) => {
  const {container} = style;
  const {buttonText, button} = styles;
  const renderButton = title => (
    <TouchableOpacity style={button} onPress={() => props.onClick(title)}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={container}>
      {renderButton('AC')}
      {renderButton('+/-')}
      {renderButton('%')}
    </View>
  );
};

export default Operands;
