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
        },
        {
            name: 'Batch 2'
        },
        {
            name: 'Batch 3'
        },
        {
            name: 'Batch 4'
        },
        {
            name: 'Batch 5'
        },
        {
            name: 'Batch 6'
        },
        {
            name: 'Batch 7'
        },
        {
            name: 'Batch 8'
        },
        {
            name: 'Batch 9'
        },
        {
            name: 'Batch 10'
        },
        {
            name: 'Batch 11'
        },
        {
            name: 'Batch 12'
        }
    ]

    const batchCard = (params: any) => {
        return (
            <Pressable onPress={() => handleBatchSelect(params.item)}>
                <Card>
                    <Text>{params.item.name}</Text>
                </Card>
            </Pressable>
        );
    };

    function handleBatchSelect(batch: any) {
        nav.navigate('BatchDetail', { batch: batch });
    }

    return (
        <View>
            <Text>
                Batch List Screen
            </Text>
            <FlatList
                data={batches}
                renderItem={batchCard}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}