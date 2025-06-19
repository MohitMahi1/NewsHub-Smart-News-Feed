import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'cachedArticles';

export const storeArticles = async (articles) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  } catch (e) {
    console.error("Storing error:", e);
  }
};

export const getStoredArticles = async () => {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Retrieval error:", e);
    return [];
  }
};
