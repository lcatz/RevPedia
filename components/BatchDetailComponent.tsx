import React from 'react';
import { View, Text } from 'react-native';

export default function BatchDetailComponent({ route }: any) {
    return (
        <View>
            <Text>
                {route.params.batch.name}
            </Text>
        </View>
    )
}