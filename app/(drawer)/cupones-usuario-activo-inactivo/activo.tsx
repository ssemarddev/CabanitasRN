import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const activo = () => {
  return (
    <LinearGradient
      colors={["#FED78A", "#FFBF37"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 justify-center items-center p-6"
    >
      <Text className="text-4xl font-Poppins-ExtraBold">Cupones</Text>
      <Text className="font-Poppins-Regular text-sm text-black text-center">
        Aquí podrás ver tu cupón de cortesía para tu cumpleaños.
      </Text>

      <View className="bg-white rounded-2xl shadow-lg p-6 mt-20 h-auto">
        <View className="flex-row justify-between items-center w-full">
          <Image
            source={require("../../../assets/images/LogoCaba.png")}
            className="w-32 h-20"
            resizeMode="contain"
          />

          <View className="w-40">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="cake-variant"
                size={24}
                color="black"
              />
              <Text className="text-3xl font-semibold ml-2">FELIZ</Text>
            </View>
            <Text className="text-xl font-semibold text-left">Cumpleaños!</Text>
          </View>
        </View>

        <Text className="text-lg font-bold mt-6 text-center">
          Obtén un buffet de cortesía
        </Text>

        <View className="pb-9 px-14">
          <Text className="text-gray-700">
            • Cupón válido para 1 persona, solo cumpleañero.
          </Text>
          <Text className="mt-4 text-gray-700">
            • No válido con ninguna otra promoción o descuento.
          </Text>
          <Text className="mt-4 text-gray-700">• No tiene valor monetario.</Text>
        </View>

        <View className="border-t border-gray-300 my-4" />

        <Text className="text-center text-gray-600 mt-6">Código de cupón:</Text>
        <Text className="text-center text-xl font-bold mt-10">
          12831838128312931924014
        </Text>

        <Text className="text-center text-gray-400 text-xs mt-10">
          Vigencia del cupón: 6 meses.
        </Text>
      </View>
    </LinearGradient>
  );
};

export default activo;
