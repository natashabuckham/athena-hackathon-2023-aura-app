import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/homeScreen';
import FavouritesScreen from './screens/favouritesScreen';
import SettingsScreen from './screens/settingsScreen';

const homeName = 'Home';
const favouritesName = 'Favourites';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === favouritesName) {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={favouritesName} component={FavouritesScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
  );
};

export default MainContainer;
