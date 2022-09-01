import { useState } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppContext from '../context/AppContext';

import StoreScreen from '../screens/StoreScreen';

import SettingsScreen from '../screens/SettingsScreen';

import ProductScreen from '../screens/ProductScreen';

import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

function ProductNavigation() {
  return (
    <>
      <Header />
      <Tab.Navigator
        // to avoid screen swipes
        screenOptions={
          {swipeEnabled: false}
        }
      >
        <Tab.Screen name="Store" component={StoreScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
}

export default function Navigation() {

  // navigate to store after choose favorite item
  const [navigateToStore, setNavigateToStore] = useState(true);

  return (
    <AppContext.Provider value={{navigateToStore, setNavigateToStore}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Init"
            component={ProductNavigation}
            options={
              {headerShown: false}
            }
          />
          <Stack.Screen name="Details" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
