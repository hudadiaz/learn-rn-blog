import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as blogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(blogContext);
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({})
