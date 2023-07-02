import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Favourites from '../../favourites/favourites';

const FavouritesScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favourites" component={Favourites} />
    </Stack.Navigator>
  );
};

export default FavouritesScreen;
