import React from 'react';
import { View, Text } from 'react-native';

export default function BatchDetailComponent({ route }: any) {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'AlfaSlabOne_400Regular',
          margin: 10,
        }}>
        {'Name: ' +
          route.params.batch.name +
          '\n' +
          'Skill: ' +
          route.params.batch.skill}
      </Text>
    </View>
  );
}
