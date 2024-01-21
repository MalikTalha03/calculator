import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/screens/Home';
import Keypad from './src/components/Keypad';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height : '100%',
  },
});

const App = () => {
  const {container} = styles;
    return (
      <View style={container}>
        <Home />
      </View>
    );
  } 

export default App;
