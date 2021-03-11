import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import BatchListComponent from '../components/BatchListComponent';
import BatchDetailComponent from '../components/BatchDetailComponent';

const Stack = createStackNavigator();

export default function BatchStackNavigator() {

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
        <Stack.Navigator initialRouteName='BatchList'>
            <Stack.Screen
                name='BatchList'
                component={BatchListComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='BatchDetail'
                component={BatchDetailComponent}
                options={headerOptions}
            />
        </Stack.Navigator>
    );
}