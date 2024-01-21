import React from 'react';
import Keypad from '../components/Keypad';
import Operands from '../components/Operands';
import Inputfield from '../components/Inputfield';
import Operators from '../components/Operators';
import {View, StyleSheet} from 'react-native';
import {useState} from 'react';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  group: {
    flexBasis: '75%',
  },
});

const Home = () => {
  const {container, rowContainer, group, single} = styles;
  const [input, setInput] = useState('');
  const operators = ['+', '-', '*', '/'];
  const handleClick = title => {
    if (title === 'AC') {
      setInput('');
      return;
    }
    if(title === '+/-') {
      setInput((input * -1).toString());
      return;
    }
    if(title === '%') {
      setInput((input / 100).toString());
      return;
    }
    if(title === '=') {
      setInput(eval(input).toString());
      return;
    }
    if(operators.includes(title)) {
      if(input === '' || operators.includes(input.slice(-1))) {
        return;
      }
    }
    setInput(input + title);
  };
  return (
    <View style={container}>
      <Inputfield input={input} />
      <View style={rowContainer}>
        <View style={[container, group]}>
          <Operands onClick={handleClick} />
          <Keypad onClick={handleClick} />
        </View>
        <Operators onClick={handleClick} />
      </View>
    </View>
  );
};

export default Home;
