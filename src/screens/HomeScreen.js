import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Welcome Home</Text>

			<Button
				onPress={() => navigation.navigate('Components')}
				title="Go to Components Demo"
			/>

			<Button
				onPress={() => navigation.navigate('List')}
				title="Go to List Demo"
			/>

			<Button
				onPress={() => navigation.navigate('Image')}
				title="Go to Image Demo"
			/>

			<Button
				onPress={() => navigation.navigate('Counter')}
				title="Go to Counter Demo"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		textAlign: 'center',
		margin: 20
	}
})

export default HomeScreen
