import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useState } from "react";
import { router } from "expo-router";

const CustomDrawer = () => {
  // Simulación del estado de autenticación

  const [userRole, setUserRole] = useState("admin"); // "guest", "admin" o null (no autenticado)

  return (
    <View className="flex-1">
      {/* Inicio (visible para todos) */}
      <View className="flex justify-center items-center mt-7">
        <Pressable onPress={() => router.push("/bienvenido")}>
          <Ionicons name="home" size={60} color="black" />
          <Text className="text-center">Inicio</Text>
        </Pressable>
      </View>

      {/* Iniciar sesión (solo si no está autenticado) */}
      {userRole === "null" && (
        <View className="flex justify-center items-center mt-7">
          <Pressable onPress={() => router.push("./login")}>
            <FontAwesome name="sign-in" size={60} color="black" />
            <Text className="text-center">Iniciar sesión</Text>
          </Pressable>
        </View>
      )}

      {/* Verificar (solo visible logeados) */}
      {(userRole === "guest" || userRole === "admin") && (
        <View className="flex justify-center items-center mt-7">
          <Pressable onPress={() => router.push("./cupones-guest")}>
            <FontAwesome5 name="ticket-alt" size={60} color="black" />
            <Text className="text-center">Cupon</Text>
          </Pressable>
        </View>
      )}

      {/* Verificar (solo visible logeados) */}
      {(userRole === "guest" || userRole === "admin") && (
        <View className="flex justify-center items-center mt-7">
          <Pressable onPress={() => router.push("./info")}>
            <Ionicons name="checkmark-circle-sharp" size={60} color="black" />
            <Text className="text-center">Verificar</Text>
          </Pressable>
        </View>
      )}

      {/* Registrar (solo visible para admin) */}
      {userRole === "admin" && (
        <View className="flex justify-center items-center mt-7">
          <Pressable onPress={() => router.push("./registrar")}>
            <Ionicons name="person-add-sharp" size={60} color="black" />
            <Text className="text-center">Registrar</Text>
          </Pressable>
        </View>
      )}

      {/* Grupo de íconos en la parte inferior */}
      <View className="flex-1 justify-end">
        {/* Cerrar sesión (solo visible logeados) */}
        {(userRole === "guest" || userRole === "admin") && (
          <View className="flex justify-center items-center mt-7">
            <Pressable
              onPress={() => {
                // Lógica para cerrar sesión
                setUserRole("null"); // Restablecer a 'no autenticado'
                router.push("/login"); // Redirige a la página de inicio
              }}
            >
              <FontAwesome name="sign-out" size={60} color="black" />
              <Text className="text-center">Cerrar sesión</Text>
            </Pressable>
          </View>
        )}
      </View>

      {/* Info (visible para todos) */}
      <View className="flex justify-center items-center mt-7 mb-7">
        <Pressable onPress={() => router.push("./tyc")}>
          <FontAwesome name="info-circle" size={60} color="black" />
          <Text className="text-center">Info</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomDrawer;
