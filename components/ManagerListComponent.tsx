import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default function ManagerListComponent() {
    const keyExtractor = (item: object, index: number) => {
        return index.toString();
    };
    const managers = [
        {
            name: 'Manager 1',
        },
        {
            name: 'Manager 2'
        },
        {
            name: 'Manager 3'
        }
    ]

    const managerCard = (params: any) => {
        return (
            <Pressable onPress={() => handleManagerSelect(params.item)}>
                <Card>
                    <Text>{params.item.name}</Text>
                </Card>
            </Pressable>
        );
    };

    function handleManagerSelect(manager: any) {
        console.log(manager);
    }

    return (
        <View>
            <Text>
                Manager List Screen
            </Text>
            <FlatList
                data={managers}
                renderItem={managerCard}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}