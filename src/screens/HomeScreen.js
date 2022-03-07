import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ( props ) => {
  
  return (
    <View>

      <Text style={styles.text}>Welcome Home</Text>

      <Button 
        onPress={ () => props.navigation.navigate('Components') }
        title='Go to Components Demo' 
      />

      <Button 
        onPress={ () => props.navigation.navigate('List') }
        title='Go to List Demo'
      />

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
