import React from 'react';
import { View, Text } from 'react-native';

export default function ManagerDetailComponent({ route }: any) {
    return (
        <View>
            <Text>
                {'Name: ' + route.params.manager.name + '\n' + 
                'Email: ' + route.params.manager.email}
            </Text>
        </View>
    )
}