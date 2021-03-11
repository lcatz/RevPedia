import React from 'react';
import { View, Text } from 'react-native';

export default function TrainerDetailComponent({ route }: any) {
    return (
        <View>
            <Text>
                {route.params.trainer.name}
            </Text>
        </View>
    )
}