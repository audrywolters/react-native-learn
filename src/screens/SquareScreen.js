import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_CREMENT = 15

const SquareScreen = () => {
	const [red, setRed] = useState(0)
	const [green, setGreen] = useState(0)
	const [blue, setBlue] = useState(0)

	const setColor = (color, change) => {
		// color === 'red', 'green', 'blue'
		// change === COLOR_CREMENT

		switch (color) {
			case 'red':
				red + change > 255 || red + change < 0 ? null : setRed(red + change)
				return
			case 'green':
				green + change > 255 || green + change < 0 ? null : setGreen(green + change)
				return
			case 'blue':
				blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
				return
			default:
				return
		}
	}

	return (
		<View>
			<ColorCounter
				onIncrease={() => setColor('red', COLOR_CREMENT)}
				onDecrease={() => setColor('red', -1 * COLOR_CREMENT)}
				color="Red"
			/>
			<ColorCounter
				onIncrease={() => setColor('green', + COLOR_CREMENT)}
				onDecrease={() => setColor('green', -1 * COLOR_CREMENT)}
				color="Green"
			/>
			<ColorCounter
				onIncrease={() => setColor('blue', + COLOR_CREMENT)}
				onDecrease={() => setColor('blue', -1 * COLOR_CREMENT)}
				color="Blue"
			/> 
			<View
				style={{
					height: 150,
					width: 150,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	myStyle: {
		fontSize: 10
	}
})

export default SquareScreen
