import React from 'react';
import { View, Text } from 'react-native';

export default function ManagerDetailComponent({ route }: any) {
    return (
        <View>
            <Text>
                {route.params.manager.name}
            </Text>
        </View>
    )
}