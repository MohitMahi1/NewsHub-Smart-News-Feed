import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ title, onPress, cstyle }) => (
  <Pressable style={[styles.button, cstyle]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007aff',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ButtonComponent;
