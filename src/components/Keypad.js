import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import styles from './styles';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const Keypad = (props) => {
  const {container} = style;
  const {buttonText, button} = styles;
  const renderButton = title => (
    <TouchableOpacity style={button} onPress={() => props.onClick(title)}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={container}>
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
      </View>
    </View>
  );
};

export default Keypad;
