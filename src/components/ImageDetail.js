import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageDetail = ( props ) => {

    return (
        <>
            <Text>{ props.title }</Text>
        </>
    )
}

const styles = StyleSheet.create({
    myStyle: {
        fontSize: 10
    }
});

export default ImageDetail;
