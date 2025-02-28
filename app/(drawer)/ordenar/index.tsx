import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const OrdenarMenu = () => {
  return (
    <LinearGradient
      colors={["#FED78A", "#ffbf37"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="h-full"
    >
      <View className="w-full h-[150px]">
        <Text className="text-black font-Poppins-ExtraBold text-center text-[32px] mt-9 w-full">
          Ordenar
        </Text>
        <Text className="text-black text-center font-Poppins-Regular text-[12px]  w-full h-full">
          Aquí podrás ver nuestro menu, agregar los {"\n"} artículos, pagar y
          tener lista tu orden para {"\n"} llevar de manera rápida.
        </Text>
      </View>

      <View className="flex flex-row justify-between items-center w-11/12 mx-auto">
        <MaterialIcons
          name="paid"
          size={40}
          color="black"
          className="bg-white p-2 rounded-full"
        />
        <Image
          source={require("../../../assets/images/LogoCaba.png")}
          className="w-40 h-40"
          resizeMode="contain"
        />
        <FontAwesome5
          name="shopping-basket"
          size={40}
          color="black"
          className="bg-white p-2 rounded-full"
        />
      </View>

      <View className="flex-row items-center justify-center border border-gray-300 rounded-[20px] px-5  bg-white w-2/3 mx-auto font-Poppins-Regular drop-shadow-2xl">
        <Ionicons name="search-outline" size={24} color="gray" />
        <TextInput
          placeholder="Buscar Menu"
          placeholderTextColor="gray"
          placeholderClassName="font-Poppins-Regular"
          className="font-Poppins-Regular text-black"
        />
      </View>

        {/* GRID CONTENEDOR */}
        <View className="flex flex-row flex-wrap justify-between p-4 bg-white mt-7 w-11/12 mx-auto rounded-[12px]">
        
          {/* GRID ITEM */}
          <View className="w-[48%] p-4 rounded-lg mb-4">
            <Image
              className="w-[135px] h-[135px] rounded-full border-2"
              resizeMode="cover"
              source={require("../../../assets/images/comida1.jpg")}
            />
            <Text className="mt-[7px] font-Poppins-Regular text-center">
              Chile Relleno
            </Text>

            <Pressable className="bg-[#523903] py-1 rounded-lg mt-[11px] active:opacity-80 w-2/3 mx-auto">
              <Text className="text-white text-center font-Poppins-ExtraBold text-[10px]">
                Comprar
              </Text>
            </Pressable>
          </View>

          {/* GRID ITEM */}
          <View className="w-[48%] p-4 rounded-lg mb-4">
            <Image
              className="w-[135px] h-[135px] rounded-full border-2"
              resizeMode="cover"
              source={require("../../../assets/images/comida1.jpg")}
            />
            <Text className="mt-[7px] font-Poppins-Regular text-center">
              Chile Relleno
            </Text>

            <Pressable className="bg-[#523903] py-1 rounded-lg mt-[11px] active:opacity-80 w-2/3 mx-auto">
              <Text className="text-white text-center font-Poppins-ExtraBold text-[10px]">
                Comprar
              </Text>
            </Pressable>
          </View>

          {/* GRID ITEM */}
          <View className="w-[48%] p-4 rounded-lg mb-4">
            <Image
              className="w-[135px] h-[135px] rounded-full border-2"
              resizeMode="cover"
              source={require("../../../assets/images/comida1.jpg")}
            />
            <Text className="mt-[7px] font-Poppins-Regular text-center">
              Chile Relleno
            </Text>

            <Pressable className="bg-[#523903] py-1 rounded-lg mt-[11px] active:opacity-80 w-2/3 mx-auto">
              <Text className="text-white text-center font-Poppins-ExtraBold text-[10px]">
                Comprar
              </Text>
            </Pressable>
          </View>
 
        </View>

    </LinearGradient>
  );
};

export default OrdenarMenu;
