import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>BoxScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		borderColor: 'black'
	},
	textStyle: {
		borderWidth: 10,
		borderColor: 'pink',
		margin: 20,
		padding: 2
	}
})

export default BoxScreen
