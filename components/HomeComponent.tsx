import React from 'react';
import { View, Text } from 'react-native';

export default function HomeComponent() {
  return (
    <View>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 21,
          fontFamily: 'AlfaSlabOne_400Regular',
          margin: 15,
        }}>
        Welcome to RevPedia!
      </Text>
    </View>
  );
}
