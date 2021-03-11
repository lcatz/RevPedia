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
                    <Text style={{alignSelf: 'center'}}>
                        RevPedia
                    </Text>
                </View>
            ),
        }
    }

    return (
        <Stack.Navigator initialRouteName='ManagerList'>
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