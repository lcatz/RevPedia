import React from 'react';
import { View, Text } from 'react-native';

export default function BatchDetailComponent({ route }: any) {
    return (
        <View>
            <Text>
                {'Name: ' + route.params.batch.name + '\n' +
                'Skill: ' + route.params.batch.skill}
            </Text>
        </View>
    )
}