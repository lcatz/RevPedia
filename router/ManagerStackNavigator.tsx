import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ManagerListComponent from '../components/ManagerListComponent';

const Stack = createStackNavigator();

export default function ManagerStackNavigator() {
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
        component={ManagerListComponent}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
}
