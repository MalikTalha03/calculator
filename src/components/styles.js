import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  button: {
    flexBasis: '30%',
    backgroundColor: '#23272b',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    borderColor: '#23272b',
    borderWidth: 2,
    borderRadius: 30,
    margin: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  lastButton: {
    flex: 2,
  },
  input: {
    height: 80,
    backgroundColor: 'black',
    fontSize: 18,
    textAlign: 'right',
  },
});

export default styles;
