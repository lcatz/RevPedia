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
            email: 'trainer1@revature.net'
        },
        {
            name: 'Trainer 2',
            email: 'trainer2@revature.net'
        },
        {
            name: 'Trainer 3',
            email: 'trainer3@revature.net'
        },
        {
            name: 'Trainer 4',
            email: 'trainer4@revature.net'
        },
        {
            name: 'Trainer 5',
            email: 'trainer5@revature.net'
        },
        {
            name: 'Trainer 6',
            email: 'trainer6@revature.net'
        },
        {
            name: 'Trainer 7',
            email: 'trainer7@revature.net'
        },
        {
            name: 'Trainer 8',
            email: 'trainer8@revature.net'
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