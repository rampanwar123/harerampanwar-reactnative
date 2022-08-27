import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import ProductDetails from '../screens/productDetails';
import NewProduct from '../screens/newProduct';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'ProductDetails'} component={ProductDetails} />
      <Stack.Screen name={'NewProduct'} component={NewProduct} />
    </Stack.Navigator>
  );
};

export default MainStack;
