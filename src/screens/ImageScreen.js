import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

    return (
        <>
            <View>
                <ImageDetail />
                <ImageDetail />
                <ImageDetail />
                <ImageDetail />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    myStyle: {
        fontSize: 10
    }
});

export default ImageScreen;
