import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function TrainerListComponent() {
    const nav = useNavigation();
    const keyExtractor = (item: object, index: number) => {
        return index.toString();
    };
    const trainers = [
        {
            name: 'Trainer 1',
        },
        {
            name: 'Trainer 2'
        },
        {
            name: 'Trainer 3'
        },
        {
            name: 'Trainer 4'
        },
        {
            name: 'Trainer 5'
        },
        {
            name: 'Trainer 6'
        },
        {
            name: 'Trainer 7'
        },
        {
            name: 'Trainer 8'
        }
    ]

    const trainerCard = (params: any) => {
        return (
            <Pressable onPress={() => handleTrainerSelect(params.item)}>
                <Card>
                    <Text>{params.item.name}</Text>
                </Card>
            </Pressable>
        );
    };

    function handleTrainerSelect(trainer: any) {
        nav.navigate('TrainerDetail', { trainer: trainer });
    }

    return (
        <View>
            <Text>
                Trainer List Screen
            </Text>
            <FlatList
                data={trainers}
                renderItem={trainerCard}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}