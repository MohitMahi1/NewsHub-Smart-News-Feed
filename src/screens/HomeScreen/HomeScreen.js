import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { fetchNewsArticles } from '../../utils/api';
import { storeArticles, getStoredArticles } from '../../services/storageService';
import ArticleCard from '../../component/ArticleCard';

const {height, width} = Dimensions.get("screen");
const HomeScreen = ({navigation}) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);

  const loadArticles = async (pageNum = 1, searchQuery = '') => {
    setLoading(true);
    try {
      const data = await fetchNewsArticles(pageNum, searchQuery);
      const newList = pageNum === 1 ? data : [...articles, ...data];
      setArticles(newList);
      await storeArticles(newList);
    } catch (error) {
      if (!isConnected) {
        const cached = await getStoredArticles();
        setArticles(cached);
      } else {
        console.error('Failed to fetch:', error);
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
      setSearching(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage(prev => prev + 1);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    loadArticles(1, search);
  };

  const handleSearch = () => {
    setSearching(true);
    setPage(1);
    loadArticles(1, search);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    loadArticles(page, search);
  }, [page]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search news..."
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
      {loading && page === 1 ? (
        <ActivityIndicator size="large" color="#007aff" />
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ArticleCard
              article={item}
              onPress={() => navigation.navigate('NewsDetail', { article: item })}
            />
          )}
          showsVerticalScrollIndicator={false}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          ListFooterComponent={
            loading && page > 1 ? (
              <ActivityIndicator size="small" color="#888" style={{ marginVertical: 10 }} />
            ) : null
          }
        />
      )}
      {!isConnected && articles.length === 0 && (
        <Text style={styles.offlineText}>
          You are offline and no cached data is available.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchBar: {
    height: height*0.04,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  offlineText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});

export default HomeScreen;
