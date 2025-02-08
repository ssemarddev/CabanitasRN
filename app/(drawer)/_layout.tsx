import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "black",
        headerShadowVisible: false,
        drawerStyle: {
          borderRadius: 0, // Eliminar bordes redondeados
          backgroundColor: "white", // Asegurar que el fondo no se vea vacío
          width: 250,
        },
        sceneStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Drawer.Screen
        name="bienvenido/index"
        options={{
          title: "Bienvenido",

          drawerLabel: ({ color }) => (
            <View className="flex justify-center items-center">
              <Ionicons name="home" size={15} color={color} />
              <Text
                className="font-Poppins-Regular"
                style={{ color, fontSize: 15, marginTop: 4 }}
              >
                Inicio
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del header a azul
          },
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
