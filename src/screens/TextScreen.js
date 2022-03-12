import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
	return (
		<View>
			<TextInput style={styles.input} />
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		margin: 15,
		padding: 5,
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1
	}
})

export default TextScreen