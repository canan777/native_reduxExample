import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from './src/pages/ProductScreen';
import CartScreen from './src/pages/CartScreen';
import ProductDetail from './src/pages/ProductDetail';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}  >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductScreen}></Stack.Screen>
        <Stack.Screen name="Carts" component={CartScreen}></Stack.Screen>
        <Stack.Screen name="ProductDetail" component={ProductDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}