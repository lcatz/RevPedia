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
                component={TrainerListComponent}
                options={headerOptions}
            />
        </Stack.Navigator>
    );
}