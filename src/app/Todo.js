import React, { Component } from 'react';
import {
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

    handleChange(text) {
        this.setState({
            newTodo: text
        })
    }

    handlePress() {
        const todos = [...this.state.todos, this.state.newTodo];
        this.setState({todos, newTodo: '' });
    }

    render() {
        return (
            <View>
                <TextInput style={{padding: 30,  width: 160}}
                    value={this.state.newTodo}
                    onChangeText={this.handleChange.bind(this)}
                />
                <TouchableOpacity style={{padding: 30}}
                    onPress={this.handlePress.bind(this)}>
                    <Text>Create</Text>
                </TouchableOpacity>
                <View style={{padding: 30  }}>
                    {this.state.todos.map((todo, i) =>
                        <Text key={i}>{todo}</Text>)}
                </View>
            </View>
        )
    }
}
