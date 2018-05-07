import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ADD_POST } from './reducers';

const _Reddit = (props) => (
  <View>
    {props.posts.map((post, i) => (
      <Text key={i}>{post.name}</Text>
    ))}
    <TouchableOpacity onPress={props.addRedditPost}>
      <Text>
        Add
      </Text>
    </TouchableOpacity>
  </View>
);

// const styles = StyleSheet.create({
//   container: {
//     margin: 20
//   }
// })`

const mapStateToProps = (state) => ({
  posts: state.reddit
});
const addActionToProps = (dispatch) => ({
  addRedditPost(post = {name: 'new post'}){
    dispatch({ type: ADD_POST, payload: post });
  }
})
export const Reddit = connect(mapStateToProps, addActionToProps)(_Reddit);