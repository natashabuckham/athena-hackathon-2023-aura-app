import MapView from "react-native-maps";
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VenueChoices" component={VenueChoices} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="MapResults" component={MapResults} />
        <Stack.Screen name="VenueDetails" component={VenueDetails} />
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
