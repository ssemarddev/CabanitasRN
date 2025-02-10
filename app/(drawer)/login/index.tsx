import React from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import * as Yup from "yup";
import Boton from "@/components/Boton";

const Login = () => {
  const validationSchema = Yup.object().shape({
    correo: Yup.string()
      .email("Correo inválido")
      .required("El correo es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es obligatoria"),
  });

  return (
    <LinearGradient
      colors={["#FED78A", "#ffbf37"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 justify-center p-4"
    >
      <ScrollView>
  
        <View className="mt-16">
            <View className="flex justify-center items-center w-full">
              <Image source={require("../../../assets/images/LogoCaba.png")} />
              <Text className="font-Poppins-ExtraBold text-[32px] text-center w-full">
                Bienvenido
              </Text>
              <Text className="font-Poppins-Regular text-[12px] text-center w-full">
                Ingresa tus credenciales para poder {"\n"} acceder
              </Text>
            </View>

          <Formik
            initialValues={{
              correo: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) =>
              Alert.alert("Inicio de sesión", JSON.stringify(values))
            }
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.container}>
                <Text className="ml-4 font-Poppins-Regular">Correo Electrónico:</Text>
                <TextInput
                  style={styles.input}
                   className="font-Poppins-Regular mb-0"
                  keyboardType="email-address"
                  onChangeText={handleChange("correo")}
                  onBlur={handleBlur("correo")}
                  value={values.correo}
                  placeholder="Ingresa tu correo electrónico..."
                />
                {touched.correo && errors.correo && (
                  <Text  className="font-Poppins-Regular" style={styles.error}>{errors.correo}</Text>
                )}

                <Text className="ml-4 font-Poppins-Regular">Contraseña:</Text>
                <TextInput
                  style={styles.input}
                   className="font-Poppins-Regular"
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Ingresa tu contraseña..."
                />
                {touched.password && errors.password && (
                  <Text  className="font-Poppins-Regular" style={styles.error}>{errors.password}</Text>
                )}

                <Boton text="Enviar Datos" onPress={() => handleSubmit()} />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 18,
    marginBottom: 10,
    borderRadius: 11,
    backgroundColor: "white",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default Login;
