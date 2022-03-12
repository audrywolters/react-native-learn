import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const COUNT_CREMENT = 1

const reducer = (state, action) => {
	//  state === {count}: number
	// action === {type}: 'increment' || 'decrement'
	//			  {payload}: COUNT_CREMENT

	switch (action.type) {
		case 'increment':
			// ADD the payload
			return { ...state, count: state.count + action.payload }
		case 'decrement':
			// SUBTRACT	the payload
			return { ...state, count: state.count - action.payload }
		default:
			return state
	}
}

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 })

	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
					dispatch({ type: 'increment', payload: COUNT_CREMENT })
				}}
			/>

			<Button
				title="Decrease"
				onPress={() => {
					dispatch({ type: 'decrement', payload: COUNT_CREMENT })
				}}
			/>

			<Text>Current Count: {state.count}</Text>
		</View>
	)
}

const styles = StyleSheet.create({})

export default CounterScreen
