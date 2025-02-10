import React from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import * as Yup from "yup";
import Boton from "@/components/Boton";

// Esquema de validación
const validationSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es obligatorio"),
  apellido: Yup.string().required("El apellido es obligatorio"),
  correo: Yup.string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  telefono: Yup.string()
    .matches(/^\d+$/, "Solo se permiten números")
    .min(10, "Debe tener al menos 10 dígitos")
    .required("El teléfono es obligatorio"),
});

const Formulario = () => {
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
              Ingresa tus datos para recibir tu {"\n"} cortesia de cumpleanos
            </Text>
          </View>

          <Formik
            initialValues={{
              nombre: "",
              apellido: "",
              correo: "",
              telefono: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) =>
              Alert.alert("Datos enviados", JSON.stringify(values))
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
                <Text className="ml-4 font-Poppins-Regular">Nombre(s):</Text>
                <TextInput
                  style={styles.input}
                  className="font-Poppins-Regular"
                  onChangeText={handleChange("nombre")}
                  onBlur={handleBlur("nombre")}
                  value={values.nombre}
                  placeholder="Ingresa tu nombre..."
                />
                {touched.nombre && errors.nombre && (
                  <Text className="font-Poppins-Regular" style={styles.error}>{errors.nombre}</Text>
                )}

                <Text className="ml-4 font-Poppins-Regular">Apellido(s):</Text>
                <TextInput
                  style={styles.input}
                  className="font-Poppins-Regular"
                  onChangeText={handleChange("apellido")}
                  onBlur={handleBlur("apellido")}
                  value={values.apellido}
                  placeholder="Ingresa tu apellido..."
                />
                {touched.apellido && errors.apellido && (
                  <Text className="font-Poppins-Regular" style={styles.error}>{errors.apellido}</Text>
                )}

                <Text className="ml-4 font-Poppins-Regular">Correo Electrónico:</Text>
                <TextInput
                  style={styles.input}
                  className="font-Poppins-Regular"
                  keyboardType="email-address"
                  onChangeText={handleChange("correo")}
                  onBlur={handleBlur("correo")}
                  value={values.correo}
                  placeholder="Ingresa tu correo electronico..."
                />
                {touched.correo && errors.correo && (
                  <Text className="font-Poppins-Regular" style={styles.error}>{errors.correo}</Text>
                )}

                <Text className="ml-4 font-Poppins-Regular">Teléfono:</Text>
                <TextInput
                  style={styles.input}
                  className="font-Poppins-Regular"
                  keyboardType="phone-pad"
                  onChangeText={handleChange("telefono")}
                  onBlur={handleBlur("telefono")}
                  value={values.telefono}
                  placeholder="Ingresa tu numero de telefono..."
                />
                {touched.telefono && errors.telefono && (
                  <Text className="font-Poppins-Regular" style={styles.error}>{errors.telefono}</Text>
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

export default Formulario;
