import React, {useState} from 'react'
import { 
  View, 
  Text,
  Image,
  ScrollView,
  Pressable
} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const data = [
  {
    id: "1",
    nombre: "Arroz Frito",
    descripcion: "Our fried rice is made from the finest ingredients and veggies. Every single dish is made with fresh vegetables. Each plate is served with our signature chicken and a free",
    complementos: ["Frijoles", "Ensalada", "Papas Fritas"]
  },
];


const index = () => {

  const [quantity, setQuantity] = useState(1);
  const basePrice = 120; // Precio fijo del producto
  const [price, setPrice] = useState(basePrice);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setPrice(newQuantity * basePrice);
    }
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setPrice(newQuantity * basePrice);
  };


  const [selectedComplemento, setSelectedComplemento] = useState(data[0].complementos[0]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (

    // Background
    <LinearGradient
          colors={["#FED78A", "#ffbf37"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="h-full"
        >
          {/* Titulo */}
          <Text className='text-black text-3xl font-Poppins-ExtraBold text-center mt-[20px]'>
            Detalles
          </Text>

          {/* Contenedor */}
          <View className="relative w-full h-2/3">

            {/* Imagen de la comida */}
            <Image
              source={require("../../../assets/images/comida1.jpg")}
              className="w-full h-full"
              resizeMode="cover"
            />

            {/* Nombre de la comida */}
            <View className="absolute top-20 right-10 bg-black/50 px-safe-offset-5 py-2  rounded-3xl border-2 border-white">
              <Text className="text-white text-lg font-Poppins-SemiBold">
                {data[0].nombre}
              </Text>
            </View>
            
             {/* GRID CONTENEDOR */}
            <View className="absolute justify-between p-4 bg-white w-full h-full mt-7 mx-auto rounded-[12px] top-2/3">
              <ScrollView className="h-full p-5" nestedScrollEnabled={true}>

                {/* Descripcion */}
                <Text className="text-black text-3xl font-Poppins-ExtraBold">
                  Descripción
                </Text>
                <Text className="text-gray-600 text-base" >{data[0].descripcion}</Text>

                {/* COmplementos */}
                <View className="bg-white top-4">
                  <Text className="text-black text-3xl font-Poppins-ExtraBold">
                    Complementos  
                  </Text>

                  {/* Botón para abrir el dropdown */}
                  <Pressable
                    className="border border-gray-300 rounded-md p-3 mt-2 bg-white"
                    onPress={() => setDropdownVisible(!dropdownVisible)}
                  >
                    <Text className="text-black">{selectedComplemento}</Text>
                  </Pressable>

                  {/* Lista desplegable */}
                  {dropdownVisible && (
                    <View className="border border-gray-300 rounded-md mt-1 bg-white shadow-lg">
                      {data[0].complementos.map((item, index) => (
                        <Pressable
                          key={index}
                          className="p-3 border-b border-gray-200"
                          onPress={() => {
                            setSelectedComplemento(item);
                            setDropdownVisible(false);
                          }}
                        >
                          <Text className="text-black">{item}</Text>
                        </Pressable>
                      ))}
                    </View>
                  )}



                  {/* Flotante que incrementa */}
                  <View style={{ position: "absolute", bottom: -60, left: 20, right: 20, backgroundColor: "#5A3A00", padding: 10, borderRadius: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text className="text-white text-lg font-bold left-5">${price}</Text>
                    
                    <View className="flex-row items-center border border-white rounded-full px-6 py-3">
                      <Pressable onPress={decreaseQuantity}>
                        <Text className="text-white text-2xl">-</Text>
                      </Pressable>
                      <Text className="text-white text-lg mx-6">{quantity}</Text>
                      <Pressable onPress={increaseQuantity}>
                        <Text className="text-white text-2xl">+</Text>
                      </Pressable>
                    </View>

                    {/* <Pressable onPress={addToCart}> */}
                    <Pressable>
                      <FontAwesome5
                        name="shopping-basket"
                        size={30}
                        color="black"
                        className="bg-white p-1 rounded-full right-5"
                      />
                    </Pressable>
                  </View>
                </View>
              </ScrollView>
            </View>            
          </View>
    </LinearGradient>
  )
}

export default index