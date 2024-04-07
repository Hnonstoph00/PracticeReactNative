import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

type CatProps = {
    name: string;
  };
export const Cat = (catpro: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);
  const toggle = () => {
    setIsHungry(!isHungry)
  }
  return (
  <View>
      <Text> Hello, I am your {catpro.name} and i am {isHungry ? "Hungry" : "Full"}!</Text>
      <Button  onPress = {() => {
          toggle()
        }} 
        title = "Press me"> </Button>
  </View>
)

};
