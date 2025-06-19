import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen';
import NewsDetailScreen from '../src/screens/NewsDetailsScreen/NewsDetailScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='NewsHub' component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ title: "News Detail" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation

const styles = StyleSheet.create({})