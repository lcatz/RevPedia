import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeComponent from '../components/HomeComponent';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  function headerOptions() {
    return {
      headerTitle: () => (
        <View>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              fontWeight: '900',
              fontSize: 21,
            }}>
            RevPedia
          </Text>
        </View>
      ),
    };
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name='Home'
        component={HomeComponent}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
}
