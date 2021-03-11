import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TrainerListComponent from '../components/TrainerListComponent';
import TrainerDetailComponent from '../components/TrainerDetailComponent';

const Stack = createStackNavigator();

export default function TrainerStackNavigator() {

    function headerOptions() {
        return {
            headerTitle: () => (
                <View>
                    <Text style={{alignSelf: 'center'}}>
                        RevPedia
                    </Text>
                </View>
            ),
        }
    }

    return (
        <Stack.Navigator initialRouteName='TrainerList'>
            <Stack.Screen
                name='TrainerList'
                component={TrainerListComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='TrainerDetail'
                component={TrainerDetailComponent}
                options={headerOptions}
            />
        </Stack.Navigator>
    );
}