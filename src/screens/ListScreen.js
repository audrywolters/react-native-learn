import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
	const friendList = [
		{ name: 'Jill', age: 37 },
		{ name: 'Megan', age: 37 },
		{ name: 'Arik', age: 42 },
		{ name: 'Mervyn', age: 12 },
		{ name: 'Mina', age: 16 },
		{ name: 'Purse', age: 5 },
		{ name: 'Coat', age: 6 },
		{ name: 'Gloves', age: 1 }
	]

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			keyExtractor={(f) => f.name}
			data={friendList}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				)
			}}
		/>
	)
}

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 10
	}
})

export default ListScreen
