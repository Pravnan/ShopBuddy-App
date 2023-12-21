// App.js

// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';  
import SplashScreen from './Screens/SplashScreen';  
import ShoppingListsScreen from './Screens/ShoppingListsScreen';
import StoreLocator from './Screens/StoreLocator';
import FoodBlogScreen from './Screens/FoodBlogScreen';
import ContactUs from './Screens/ContactUs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ShoppingListsScreen" component={ShoppingListsScreen} />
        <Stack.Screen name="StoreLocator" component={StoreLocator} />
        <Stack.Screen name="FoodBlogScreen" component={FoodBlogScreen} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




