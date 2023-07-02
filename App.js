import MapView from "react-native-maps";
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

import SplashScreen from './src/components/splash-screen/splashScreen';
import MainContainer from './src/components/navigation/mainContainer';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        <Stack.Screen name="MainContainer" component={MainContainer} />
      {/* <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MapView
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
