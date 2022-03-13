import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textOneStyle}>Child 1</Text>
			<Text style={styles.textTwoStyle}>Child 2</Text>
			<Text style={styles.textThreeStyle}>Child 3</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 5,
		borderColor: 'green',
		height: 200,
		alignItems: 'center'
		// flexDirection: 'row'
	},
	textOneStyle: {
		borderWidth: 3,
		borderColor: 'pink',
		// flex: 4
	},
	textTwoStyle: {
		borderWidth: 3,
		borderColor: 'pink',
		alignSelf: 'stretch'
		// flex: 4
	},
	textThreeStyle: {
		borderWidth: 3,
		borderColor: 'pink',
		// flex: 2
	}
	// Save for reference
	// viewStyle: {
	// 	borderWidth: 5,
	// 	borderColor: 'green',
	// 	flexDirection: 'row',
	// 	alignItems: 'center',
	// 	justifyContent: 'space-between',
	// 	height: 200
	// },
})

export default BoxScreen
