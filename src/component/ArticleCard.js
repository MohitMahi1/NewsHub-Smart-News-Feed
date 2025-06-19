import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const {height, width} = Dimensions.get("screen");
const ArticleCard = ({ article, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    {article.urlToImage && (
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
    )}
    <View style={styles.content}>
      <Text numberOfLines={2} style={styles.title}>{article.title}</Text>
      <Text numberOfLines={3} style={styles.desc}>{article.description || "No description available."}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 15,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 4,
  },
  image: {
    width: width*1,
    height: height*0.18,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  desc: {
    color: '#555',
  },
});

export default ArticleCard;
