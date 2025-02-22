import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import QRCode from "react-native-qrcode-svg";


export default function QRScreen() {
  return (
    <LinearGradient
      colors={["#FED78A", "#FFBF37"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 justify-center items-center p-6"
    >
      <Image
        source={require("../../../assets/images/LogoCaba.png")}
        resizeMode="contain"
        style={{ width: 210, height: 150 }}
        className="mb-3"
      />

      <Text className="text-black text-4xl font-Poppins-ExtraBold mb-16">Bienvenido</Text>

      <View className="bg-white rounded-2xl shadow-lg p-6 items-center w-80">
        <Image
          source={require("../../../assets/images/Perfil.png")}
          className="w-32 h-32 rounded-full -mt-20 border-4 border-white"
          resizeMode="cover"
        />

        <Text className="text-black text-lg font-semibold mt-2">
          Juan Perez
        </Text>

        <View className="mt-4">
          <QRCode value="https://www.facebook.com/LasCabanitasPN/?locale=es_LA" size={220}/>
        </View>
      </View>

      <Text className="text-center text-black font-Poppins-Regular mt-4">
        Este es tu código QR, recuerda usarlo cada vez que realices una compra para juntar puntos y recibir recompensas.
      </Text>
    </LinearGradient>
  );
}
