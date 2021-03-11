import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ManagerListComponent from '../components/ManagerListComponent';
import ManagerDetailComponent from '../components/ManagerDetailComponent';

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
              fontFamily: 'AlfaSlabOne_400Regular',
            }}>
            RevPedia
          </Text>
        </View>
      ),
    };
  }

  return (
    <Stack.Navigator
      initialRouteName='ManagerList'
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
        name='ManagerList'
        component={ManagerListComponent}
        options={headerOptions}
      />
      <Stack.Screen
        name='ManagerDetail'
        component={ManagerDetailComponent}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
}
