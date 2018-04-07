/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import { Todo } from './src/app/Todo';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export const Main = () => (<Todo/>)
//export default class Main extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     todos: [],
  //     newTodo: ''
  //   }
  // }

  // handleChange(e) {
  //   const { value } = e.target;
  //   this.setState({
  //     newTodo: value
  //   })
  // }

  // handlePress() {

  //   this.setState({
  //     todos: [...this.state.todos, this.state.newTodo]
  //   })
  // }

  // render() {
  //   return (
  //     <Todo></Todo>
  //   );
    // return (
    //   <View style={styles.container}>
    //     <TextInput style={{ width: 60 }} 
    //       onChange={this.handleChange.bind(this)} 
    //       value={this.state.newTodo} />
  
    //     <TouchableHighlight onPress={this.handlePress.bind(this)}>
    //       <Text>
    //         tap me
    //       </Text>
    //     </TouchableHighlight>

    //     <Text style={styles.welcome}>
    //       Welcome to React Native 11!
    //     </Text>

    //     {this.state.todos.map(todo => <Text key={todo}>{todo}</Text>)}

    //   </View>

    // );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});