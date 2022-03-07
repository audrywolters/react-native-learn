import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const myName = 'Audry'

    return (
        <View>
            <Text style={ styles.header }>Getting started with React Native!</Text>
            <Text style={ styles.subHeader }>My name is { myName }.</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    header: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }
})

export default ComponentsScreen;
