import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 40
  },
  box: {
    backgroundColor: 'blue',
    width: width/2,
    height: height/3,
    position: 'absolute',
    top: 20,
    left: 20,
    borderRadius: 30
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontWeight: '600'
  }
});
