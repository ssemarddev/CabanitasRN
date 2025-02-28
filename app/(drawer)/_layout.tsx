import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import CustomDrawer from "@/components/CustomDrawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "black",
        headerShadowVisible: false,
        headerTransparent: true,
        drawerType: "front",
        drawerStyle: {
          backgroundColor: "white", // Asegurar que el fondo no se vea vacío
          width: 80,
        },
      }}
    >
      <Drawer.Screen
        name="bienvenido/index"
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del header
          },
          // Personalizar el ícono de menú hamburguesa
          headerLeft: () => (
            <Ionicons
              name="menu" // Cambia a tu ícono preferido
              size={50}
              color="#3F2B00"
              onPress={() => navigation.openDrawer()} // Abre el Drawer cuando se presiona
              style={{ marginLeft: 10 }} // Ajusta la posición si es necesario
            />
          ),
        })}
      />

      <Drawer.Screen
        name="login/index"
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del header
          },
          // Personalizar el ícono de menú hamburguesa
          headerLeft: () => (
            <Ionicons
              name="menu" // Cambia a tu ícono preferido
              size={50}
              color="#3F2B00"
              onPress={() => navigation.openDrawer()} // Abre el Drawer cuando se presiona
              style={{ marginLeft: 10 }} // Ajusta la posición si es necesario
            />
          ),
        })}
      />

      <Drawer.Screen
        name="registrar/index"
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del header
          },
          // Personalizar el ícono de menú hamburguesa
          headerLeft: () => (
            <Ionicons
              name="menu" // Cambia a tu ícono preferido
              size={50}
              color="#3F2B00"
              onPress={() => navigation.openDrawer()} // Abre el Drawer cuando se presiona
              style={{ marginLeft: 10 }} // Ajusta la posición si es necesario
            />
          ),
        })}
      />

      <Drawer.Screen
        name="cupones-guest/index"
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del header
          },
          // Personalizar el ícono de menú hamburguesa
          headerLeft: () => (
            <Ionicons
              name="menu" // Cambia a tu ícono preferido
              size={50}
              color="#3F2B00"
              onPress={() => navigation.openDrawer()} // Abre el Drawer cuando se presiona
              style={{ marginLeft: 10 }} // Ajusta la posición si es necesario
            />
          ),
        })}
      />

      <Drawer.Screen
        name="tyc/index"
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del header
          },
          // Personalizar el ícono de menú hamburguesa
          headerLeft: () => (
            <Ionicons
              name="menu" // Cambia a tu ícono preferido
              size={50}
              color="#3F2B00"
              onPress={() => navigation.openDrawer()} // Abre el Drawer cuando se presiona
              style={{ marginLeft: 10 }} // Ajusta la posición si es necesario
            />
          ),
        })}
      />

      <Drawer.Screen
        name="verificar/index"
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del header
          },
          // Personalizar el ícono de menú hamburguesa
          headerLeft: () => (
            <Ionicons
              name="menu" // Cambia a tu ícono preferido
              size={50}
              color="#3F2B00"
              onPress={() => navigation.openDrawer()} // Abre el Drawer cuando se presiona
              style={{ marginLeft: 10 }} // Ajusta la posición si es necesario
            />
          ),
        })}
      />

      <Drawer.Screen
        name="ordenar/index"
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del header
          },
          // Personalizar el ícono de menú hamburguesa
          headerLeft: () => (
            <Ionicons
              name="menu" // Cambia a tu ícono preferido
              size={50}
              color="#3F2B00"
              onPress={() => navigation.openDrawer()} // Abre el Drawer cuando se presiona
              style={{ marginLeft: 10 }} // Ajusta la posición si es necesario
            />
          ),
        })}
      />

      
<Drawer.Screen
        name="carrito-compras/index"
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del header
          },
          // Personalizar el ícono de menú hamburguesa
          headerLeft: () => (
            <Ionicons
              name="menu" // Cambia a tu ícono preferido
              size={50}
              color="#3F2B00"
              onPress={() => navigation.openDrawer()} // Abre el Drawer cuando se presiona
              style={{ marginLeft: 10 }} // Ajusta la posición si es necesario
            />
          ),
        })}
      />




    </Drawer>
  );
};

export default DrawerLayout;
