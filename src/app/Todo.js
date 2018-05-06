import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: 'enter todo'
    }
  }

  componentDidMount(){
    fetch('http://10.78.242.100:3000/todos',{
      headers:  {'Accept': 'application/json'}
    }).then((data)=> data.json())
      .then((todos) => {
        this.setState({todos})
      })
  }

  handleChange(text) {
    this.setState({
      newTodo: text
    })
  }

  handlePress() {
    fetch('http://10.78.242.100:3000/todos', {
      method: 'post',
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((data) => data.json())
      .then((todo) => {
        const todos = [todo, ...this.state.todos];
        this.setState({ todos, newTodo: '' })
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
          />
          <TouchableOpacity style={styles.button}
            onPress={this.handlePress.bind(this)}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo, i) => (
            <View style={styles.todo} key={i}>
              <Text style={styles.todoText}>{todo.name}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
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
  todos: {
    marginTop: 60
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  todoText: {
    fontSize: 24
  }
});