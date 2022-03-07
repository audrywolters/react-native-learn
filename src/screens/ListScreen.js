import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friendList = [
        { name: 'Jill' },
        { name: 'Megan' },
        { name: 'Arik' },
        { name: 'Mervyn' },
        { name: 'Mina' },
        { name: 'Purse' },
        { name: 'Coat' },
        { name: 'Gloves' }
    ]

    return (
        <FlatList 
            keyExtractor={ (f) => f.name }
            data={ friendList } 
            renderItem={ ({ item }) => {
                    return <Text>{ item.name }</Text>
                }} 
        />
    )
}

const styles = StyleSheet.create({});

export default ListScreen;