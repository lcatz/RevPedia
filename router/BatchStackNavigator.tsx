import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import BatchListComponent from '../components/BatchListComponent';

const Stack = createStackNavigator();

export default function BatckStackNavigator() {

    function headerOptions() {
        return {
            headerTitle: () => (
                <View>
                    <Text>
                        RevaPedia
                    </Text>
                </View>
            ),
        }
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={BatchListComponent}
                options={headerOptions}
            />
        </Stack.Navigator>
    );
}