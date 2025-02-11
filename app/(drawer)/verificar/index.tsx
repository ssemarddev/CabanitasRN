import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import * as Yup from "yup";
import Boton from "@/components/Boton";

const VerificarCupones = () => {
  const [mensaje, setMensaje] = useState("");
  const [colorMensaje, setColorMensaje] = useState("");

  const validationSchema = Yup.object().shape({
    folio: Yup.string()
      .matches(/^[0-9]+$/, "Solo se permiten números")
      .required("El número de folio es obligatorio"),
  });

  const validarCupon = (folio: string) => {
    const cuponesValidos = ["123456", "654321", "111222"]; // Lista de cupones válidos

    if (cuponesValidos.includes(folio)) {
      setMensaje(
        "El cupón ha sido validado con éxito y está listo para utilizarse. El cupón pertenece a Francisco Emiliano Gonzalez Garcia. Fecha de expiración: 12/Oct/2024."
      );
      setColorMensaje("#ABFFB1"); // Verde
    } else {
      setMensaje(
        "El cupón no ha sido verificado debido a que no existe o ya expiró."
      );
      setColorMensaje("#FF0000"); // Rojo
    }
  };

  return (
    <LinearGradient
      colors={["#FED78A", "#ffbf37"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="h-full p-4"
    >
      <ScrollView>
        <View>
          <Text className="text-black text-3xl font-Poppins-ExtraBold text-center mt-[88px]">
            Verificar
          </Text>
          <Text className="text-black text-center text-base">
            Ingresa el número de folio proporcionado en el {"\n"} mensaje de tu
            cupón
          </Text>

          <Formik
            initialValues={{ folio: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => validarCupon(values.folio)}
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
                {/* Campo de No. de Folio */}
                <Text className="ml-4 font-Poppins-Regular">No. de Folio:</Text>
                <TextInput
                  style={styles.input}
                  className="font-Poppins-Regular"
                  keyboardType="numeric"
                  onChangeText={handleChange("folio")}
                  onBlur={handleBlur("folio")}
                  value={values.folio}
                  placeholder="Ingresa el número de folio..."
                />
                {touched.folio && errors.folio && (
                  <Text className="font-Poppins-Regular" style={styles.error}>
                    {errors.folio}
                  </Text>
                )}

                {/* MENSAJE DE VALIDACION!*/}
                {mensaje !== "" && (
                  <Text
                    className={`p-5 rounded-[18px] font-Poppins-Regular text-[14px] ${
                      colorMensaje === "#FF0000" ? "text-white" : ""
                    }`}
                    style={{ backgroundColor: colorMensaje }}
                  >
                    {mensaje}
                  </Text>
                )}

                <Boton text="Verificar" onPress={() => handleSubmit()} />
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

export default VerificarCupones;
