import { View, Text, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import React from 'react'

const {height, width} = Dimensions.get("screen");
const Header = () => {
  return (
  <View style={styles.headerContainer}>
    <StatusBar barStyle={"dark-content"}/>
    <Image
      source={require('../assets/NewsLogo.png')}
      style={styles.logo}
    />
    <Text style={styles.title}>NewsHub</Text>
  </View>
);
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  logo: {
    marginTop:20,
    width: width*0.08,
    height: height*0.05,
    marginRight: 10,
    // resizeMode: 'contain',
  },
  title: {
    marginTop:18,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

