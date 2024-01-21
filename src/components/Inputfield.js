import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import styles from './styles';

const Inputfield = props => {
  const {input} = styles;
  return (
    <View>
      <TextInput style={input} value={props.input} />
    </View>
  );
};

export default Inputfield;
