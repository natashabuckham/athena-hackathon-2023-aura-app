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

import VenueChoices from '../../venue-choices/venueChoices';
import Filter from '../../filter/filter';
import MapResults from '../../map-results/mapResults';
import VenueDetails from '../../venue-details/venueDetails';

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VenueChoices"
        component={VenueChoices}
        options={{ unmountOnBlur: true }}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{ unmountOnBlur: true }}
      />
      <Stack.Screen
        name="MapResults"
        component={MapResults}
        options={{ unmountOnBlur: true }}
      />
      <Stack.Screen
        name="VenueDetails"
        component={VenueDetails}
        options={{ unmountOnBlur: true }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
