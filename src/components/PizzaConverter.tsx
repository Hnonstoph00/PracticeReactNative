import { useState } from "react";
import { Text, TextInput, View } from "react-native"

export const PizzaConvert = () => {
    const [inputText, setText] = useState('')
    return (
        <View>
        <Text>Please input text</Text>
        <TextInput         onChangeText={newText => setText(newText)}
></TextInput>
        <Text> {inputText.split(' ').map(word => word && '🥳').join(' ') }</Text>
        </View>
    )
};
