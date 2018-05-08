import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

export const TodoForm = (props) => (
  <View style={styles.form}>
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.handleChange}
    />
    <TouchableOpacity style={styles.button}
      onPress={props.handlePress}>
      <Text style={styles.buttonText}>Create</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    padding: 0,
    fontSize: 24,
    borderBottomWidth: 1,
    marginRight: 30
  },
  button: {
    marginTop: 20,
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
})