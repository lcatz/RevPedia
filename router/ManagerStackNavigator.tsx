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
                    <Text style={{alignSelf: 'center'}}>
                        Revapedia
                    </Text>
                </View>
            ),
        }
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={ManagerListComponent}
                options={headerOptions}
            />
        </Stack.Navigator>
    );
}