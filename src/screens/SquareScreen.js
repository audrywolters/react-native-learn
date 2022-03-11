import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_CREMENT = 15

const SquareScreen = () => {
	const [redSum, setRedSum] = useState(0)
	const [greenSum, setGreenSum] = useState(0)
	const [blueSum, setBlueSum] = useState(0)

	const setColor = (color, change) => {
		// color === 'red', 'green', 'blue'
		// change === +/- COLOR_CREMENT

		switch (color) {
			case 'red':
				redSum + change > 255 || redSum + change < 0 ? null : setRedSum(redSum + change)
				return
			case 'green':
				greenSum + change > 255 || greenSum + change < 0 ? null : setGreenSum(greenSum + change)
				return
			case 'blue':
				blueSum + change > 255 || blueSum + change < 0 ? null : setBlueSum(blueSum + change)
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
					backgroundColor: `rgb(${redSum}, ${greenSum}, ${blueSum})`
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
