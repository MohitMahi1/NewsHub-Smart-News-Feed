#  NewsHub - Smart News Feed App (React Native)

A mobile news feed application built using React Native CLI that supports infinite scrolling, offline caching, dynamic country selection, and seamless navigation to full news articles.

---

##  Features

-  Fetch news from [NewsAPI](https://newsapi.org/)
-  Infinite scroll using FlatList pagination
-  Pull-to-refresh to get latest articles
-  Offline support via AsyncStorage
-  Search functionality (optional)
-  Dynamic country-based filtering (India, US, UK, etc.)
-  Custom UI components (Buttons, Article Cards)
-  News detail screen with full content & external links

---

##  Tech Stack

- **React Native CLI**
- **Axios** (API calls)
- **AsyncStorage** (offline caching)
- **React Navigation** (screen navigation)
- **@env** with `react-native-dotenv` (environment variables)
- **FlatList** (scrollable feed with pagination)

---


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
 NEWS_API_KEY=your_news_api_key_here
 NEWS_API_BASE_URL=https://newsapi.org/v2/top-headlines
 DEFAULT_COUNTRY=in
```

## Installation

- Firstly clone the repo

```bash
git clone https://github.com/MohitMahi1/NewsHub-Smart-News-Feed.git
```
- Then install all the dependency
```bash
npm install
```
- Then clean android gradle
```bash
cd android
./gradlew clean
cd ..
```