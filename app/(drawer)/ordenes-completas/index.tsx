import { 
  View, 
  Text,
  Image
} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
const data = [
  {
    id: "11223344",
    fecha: "2024-01-15",
    hora: "10:32am",
    total:"522",
  },
  {
    id: "22334455",
    fecha: "2024-02-20",
    hora: "10:32am",
    total:"522",
  },
  {
    id: "33445566",
    fecha: "2024-02-03",
    hora: "10:32am",
    total:"522",
  },
  {
    id: "44556677",
    fecha: "2024-03-12",
    hora: "10:32am",
    total:"522",
  },
];

const index = () => {
  return (
    // BackGround
    <LinearGradient
          colors={["#FED78A", "#ffbf37"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="h-full"
        >
          {/* Titulo */}
          <Text className='text-black text-3xl font-Poppins-ExtraBold text-center mt-[40px]'>
            Ordenes Completas
          </Text>

          {/* Logo Cabañitas */}
          <View className="items-center">
            <Image
              source={require("../../../assets/images/LogoCaba.png")}
              className="w-32 h-32"
              resizeMode="contain"
            />
          </View>

          {/* Lista */}
          <Text className="text-black text-xl left-5 font-Poppins-ExtraBold">
            Lista de ordenes:
          </Text>

          
          {/* Lista de ordenes */}
          <View className="items-center top-4">
            {data.map((item) => (
              <View
                key={item.id}
                className="bg-white w-5/6 p-4 rounded-2xl shadow-md items-center mb-4"
              >
                <View className="space-y-2 items-center">
                  <Text className="text-black font-bold text-lg">ID: {item.id}</Text>
                  <Text className="text-gray-600 text-base">Fecha: {item.fecha}</Text>
                  <Text className="text-gray-600 text-base">Hora: {item.hora}</Text>
                  <Text className="text-black font-bold text-lg">Total: ${item.total}</Text>
                </View>
              </View>
            ))}
          </View>







        </LinearGradient>
    
  )
}

export default index