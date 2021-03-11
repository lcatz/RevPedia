import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function BatchListComponent() {
  const nav = useNavigation();
  const keyExtractor = (item: object, index: number) => {
    return index.toString();
  };
  const batches = [
    {
      name: 'Batch 1',
      skill: 'Java/Microservices',
    },
    {
      name: 'Batch 2',
      skill: '.NET',
    },
    {
      name: 'Batch 3',
      skill: 'Big Data',
    },
    {
      name: 'Batch 4',
      skill: 'Java/Automation',
    },
    {
      name: 'Batch 5',
      skill: 'Cloud Native React',
    },
    {
      name: 'Batch 6',
      skill: 'Java/Automation',
    },
    {
      name: 'Batch 7',
      skill: 'Java/Microservices',
    },
    {
      name: 'Batch 8',
      skill: '.NET',
    },
    {
      name: 'Batch 9',
      skill: 'Python',
    },
    {
      name: 'Batch 10',
      skill: 'Big Data',
    },
    {
      name: 'Batch 11',
      skill: 'Cloud Native React',
    },
    {
      name: 'Batch 12',
      skill: 'Java/Automation',
    },
  ];

  const batchCard = (params: any) => {
    return (
      <Pressable onPress={() => handleBatchSelect(params.item)}>
        <Card>
          <Text
            style={{
              fontFamily: 'AlfaSlabOne_400Regular',
            }}>
            {params.item.name}
          </Text>
        </Card>
      </Pressable>
    );
  };

  function handleBatchSelect(batch: any) {
    nav.navigate('BatchDetail', { batch: batch });
  }

  return (
    <View>
      <Text
        style={{
          fontFamily: 'AlfaSlabOne_400Regular',
          margin: 15,
        }}>
        Batch List Screen
      </Text>
      <FlatList
        data={batches}
        renderItem={batchCard}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}
