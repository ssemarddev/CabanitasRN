import { View, Text, Pressable } from "react-native";
import React from "react";
import { GestureResponderEvent } from "react-native";

interface Boton {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean;
  }

const Boton = ({ text, onPress }:Boton) => {
  return (
    <View>
      <Pressable className="bg-[#523903] rounded-[23px] py-4 mt-[25px] active:opacity-85" onPress={onPress}>
        <Text className="text-center text-white text-[16px] font-Poppins-SemiBold uppercase">{text}</Text>
      </Pressable>
    </View>
  );
};

export default Boton;
