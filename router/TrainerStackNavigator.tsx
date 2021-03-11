import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TrainerListComponent from '../components/TrainerListComponent';

const Stack = createStackNavigator();

export default function TrainerStackNavigator() {
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
            Revapedia
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
        component={TrainerListComponent}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
}
