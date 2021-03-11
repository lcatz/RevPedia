import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ManagerListComponent() {
    const nav = useNavigation();
    const keyExtractor = (item: object, index: number) => {
        return index.toString();
    };
    const managers = [
        {
            name: 'Manager 1',
            email: 'manager1@revature.net'
        },
        {
            name: 'Manager 2',
            email: 'manager2@revature.net'
        },
        {
            name: 'Manager 3',
            email: 'manager3@revature.net'
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
        nav.navigate('ManagerDetail', {  manager: manager });
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