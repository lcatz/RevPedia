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
                component={HomeComponent}
                options={headerOptions}
            />
        </Stack.Navigator>
    );
}