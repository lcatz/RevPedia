import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BatchStackNavigator from './BatchStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import TrainerStackNavigator from './TrainerStackNavigator';
import ManagerStackNavigator from './ManagerStackNavigator';

export default function RouterComponent() {
    const BottomTab = createBottomTabNavigator();

    return (
        <BottomTab.Navigator initialRouteName='Home'>
            <BottomTab.Screen
                name='Home'
                component={HomeStackNavigator}
            />
            <BottomTab.Screen
                name='Trainers'
                component={TrainerStackNavigator}
            />
            <BottomTab.Screen
                name='Managers'
                component={ManagerStackNavigator}
            />
            <BottomTab.Screen
                name='Batches'
                component={BatchStackNavigator}
            />
        </BottomTab.Navigator>
    )
}