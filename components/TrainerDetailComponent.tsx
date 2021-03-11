import React from 'react';
import { View, Text } from 'react-native';

export default function TrainerDetailComponent({ route }: any) {
    return (
        <View>
            <Text>
                {'Name: ' + route.params.trainer.name + '\n' + 
                'Email: ' + route.params.trainer.email}
            </Text>
        </View>
    )
}