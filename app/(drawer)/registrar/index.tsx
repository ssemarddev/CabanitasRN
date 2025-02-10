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
import { Picker } from "@react-native-picker/picker";
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
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
  rol: Yup.string().required("El rol es obligatorio"),
});

const Registrar = () => {
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
              Ingresa tus datos para registrar {"\n"} invitados o
              administradores
            </Text>
          </View>

          <Formik
            initialValues={{
              nombre: "",
              apellido: "",
              correo: "",
              password: "",
              rol: "",
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
              setFieldValue,
            }) => (
              <View style={styles.container}>
                <Text className="ml-4">Nombre(s):</Text>
                <TextInput
                  style={styles.input}
                   className="font-Poppins-Regular my-auto"
                  onChangeText={handleChange("nombre")}
                  onBlur={handleBlur("nombre")}
                  value={values.nombre}
                  placeholder="Ingresa tu nombre..."
                />
                {touched.nombre && errors.nombre && (
                  <Text  className="font-Poppins-Regular" style={styles.error}>{errors.nombre}</Text>
                )}

                <Text className="ml-4">Apellido(s):</Text>
                <TextInput
                  style={styles.input}
                   className="font-Poppins-Regular"
                  onChangeText={handleChange("apellido")}
                  onBlur={handleBlur("apellido")}
                  value={values.apellido}
                  placeholder="Ingresa tu apellido..."
                />
                {touched.apellido && errors.apellido && (
                  <Text  className="font-Poppins-Regular" style={styles.error}>{errors.apellido}</Text>
                )}

                <Text className="ml-4">Correo Electrónico:</Text>
                <TextInput
                  style={styles.input}
                  className="font-Poppins-Regular"
                  keyboardType="email-address"
                  onChangeText={handleChange("correo")}
                  onBlur={handleBlur("correo")}
                  value={values.correo}
                  placeholder="Ingresa tu correo electrónico..."
                />
                {touched.correo && errors.correo && (
                  <Text  className="font-Poppins-Regular" style={styles.error}>{errors.correo}</Text>
                )}

                <Text className="ml-4">Contraseña:</Text>
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

                <Text className="ml-4">Rol:</Text>
                <View style={styles.inputPicker}>
                  <Picker
                    selectedValue={values.rol}
                    onValueChange={(itemValue) =>
                      setFieldValue("rol", itemValue)
                    }
                  >
                    <Picker.Item
                      label="Selecciona rol del usuario..."
                      value=""
                      enabled={false}
                      color="gray"
                    />
                    <Picker.Item
                      label="Invitado"
                      value="invitado"
                      color="black"
                    />
                    <Picker.Item
                      label="Administrador"
                      value="admin"
                      color="black"
                    />
                  </Picker>
                </View>
                  {touched.rol && errors.rol && (
                    <Text className="font-Poppins-Regular" style={styles.error}>{errors.rol}</Text>
                  )}

                <Boton text="Registrar" onPress={() => handleSubmit()} />
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
  inputPicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 11,
    backgroundColor: "white",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default Registrar;
