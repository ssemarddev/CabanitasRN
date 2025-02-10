// Importamos los componentes necesarios de React Native y React
import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";


// Importamos el archivo de estilos globales
import "../global.css";

// Importamos el hook useFonts de Expo para cargar fuentes personalizadas
import { useFonts } from "expo-font";

// Importamos Slot y SplashScreen de expo-router
import { Slot, SplashScreen } from "expo-router";

// Prevenimos que la pantalla de carga (SplashScreen) se oculte automáticamente hasta que las fuentes se carguen
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // Cargamos las fuentes personalizadas y capturamos posibles errores
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  // useEffect se ejecuta cuando cambian fontsLoaded o error
  useEffect(() => {
    // Si hay un error, lanzamos una excepción
    if (error) throw error;

    // Si las fuentes se cargaron correctamente, ocultamos la pantalla de carga
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  // Si las fuentes aún no se han cargado o hay un error, retornamos null para evitar que la app se renderice incorrectamente
  if (!fontsLoaded && error) return null;

  // Retornamos el Slot, que representa el contenido de las rutas dentro del layout principal
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot/>
    </GestureHandlerRootView>
  );

};

// Exportamos el componente para su uso en la aplicación
export default RootLayout;
