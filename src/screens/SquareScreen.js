import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'


const COLOR_CREMENT = 15

const SquareScreen = () => {
	const [red, setRed] = useState(0)
	const [green, setGreen] = useState(0)
	const [blue, setBlue] = useState(0)


	return (
		<View>
			<ColorCounter
				onIncrease={() => setRed(red + COLOR_CREMENT)}
				onDecrease={() => setRed(red - COLOR_CREMENT)}
				color="Red"
			/>
			<ColorCounter
				onIncrease={() => setGreen(green + COLOR_CREMENT)}
				onDecrease={() => setGreen(green - COLOR_CREMENT)}
				color="Green"
			/>
			<ColorCounter
				onIncrease={() => setBlue(blue + COLOR_CREMENT)}
				onDecrease={() => setBlue(blue - COLOR_CREMENT)}
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
