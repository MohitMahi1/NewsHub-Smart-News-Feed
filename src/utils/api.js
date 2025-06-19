import axios from 'axios';
import { NEWS_API_KEY, NEWS_API_BASE_URL, DEFAULT_COUNTRY } from '@env';

const PAGE_SIZE = 10;

export const fetchNewsArticles = async (page = 1, query = '') => {
  const params = {
    country: DEFAULT_COUNTRY,
    apiKey: NEWS_API_KEY,
    page,
    pageSize: PAGE_SIZE,
  };

  // console.log("API KEY:", NEWS_API_KEY);
  // console.log("BASE URL:", NEWS_API_BASE_URL);
  if (query) params.q = query;

  const response = await axios.get(NEWS_API_BASE_URL, { params });
  return response.data.articles;
};
