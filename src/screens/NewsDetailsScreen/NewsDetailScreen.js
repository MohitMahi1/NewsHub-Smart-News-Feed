import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Linking,
  Dimensions
} from 'react-native';
import ButtonComponent from '../../component/ButtonComponent';

const { height, width } = Dimensions.get("screen");

const NewsDetailScreen = ({ route }) => {
  const { article } = route.params;

  // Function to clean up content text
  const formatContent = (text) => {
    if (!text) return '';
    const cleaned = text.replace(/\[\+\d+ chars\]/, '').trim();
    return cleaned.endsWith('...') ? cleaned : cleaned + ' ...More';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>
        {formatContent(article.content || article.description)}
      </Text>

      <ButtonComponent
        title="Read Full Article"
        onPress={() => Linking.openURL(article.url)}
        cstyle={styles.buttonStyl}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    // backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  buttonStyl: {
    height: height * 0.05,
    width: width * 0.8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: "center"
  }
});

export default NewsDetailScreen;
