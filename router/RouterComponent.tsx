import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeComponent from '../components/HomeComponent';
import TrainerListComponent from '../components/TrainerListComponent';
import ManagerListComponent from '../components/ManagerListComponent';
import BatchListComponent from '../components/BatchListComponent';

export default function RouterComponent() {
    const BottomTab = createBottomTabNavigator();

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
        <BottomTab.Navigator initialRouteName='Home'>
            <BottomTab.Screen
                name='Home'
                component={HomeComponent}
            />
            <BottomTab.Screen
                name='Trainers'
                component={TrainerListComponent}
            />
            <BottomTab.Screen
                name='Managers'
                component={ManagerListComponent}
            />
            <BottomTab.Screen
                name='Batches'
                component={BatchListComponent}
            />
        </BottomTab.Navigator>
    )
}