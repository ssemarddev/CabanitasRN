import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const data = [
  {
    id: "1",
    nombre: "Juan Pérez",
    email: "correo@gmail.com",
    numero: "1234567890",
    fecha: "2024-01-15",
  },
  {
    id: "2",
    nombre: "Ana López",
    email: "ana@example.com",
    numero: "0987654321",
    fecha: "2024-02-20",
  },
  {
    id: "3",
    nombre: "Carlos García",
    email: "carlos@example.com",
    numero: "1122334455",
    fecha: "2024-02-03",
  },
  {
    id: "4",
    nombre: "Luis Fernández",
    email: "luis@example.com",
    numero: "6677889900",
    fecha: "2024-03-12",
  },
  {
    id: "5",
    nombre: "María González",
    email: "maria@example.com",
    numero: "5544332211",
    fecha: "2024-04-05",
  },
  {
    id: "6",
    nombre: "Pedro Ramírez",
    email: "pedro@example.com",
    numero: "2233445566",
    fecha: "2024-05-06",
  },
  {
    id: "7",
    nombre: "Sofía Martín",
    email: "sofia@example.com",
    numero: "9988776655",
    fecha: "2024-06-07",
  },
  {
    id: "8",
    nombre: "Elena Castro",
    email: "elena@example.com",
    numero: "5566778899",
    fecha: "2024-07-08",
  },
  {
    id: "9",
    nombre: "Javier Torres",
    email: "javier@example.com",
    numero: "3344556677",
    fecha: "2024-08-09",
  },
  {
    id: "10",
    nombre: "Laura Ruiz",
    email: "laura@example.com",
    numero: "7788990011",
    fecha: "2024-09-10",
  },
  {
    id: "11",
    nombre: "Diego Herrera",
    email: "diego@example.com",
    numero: "1122446688",
    fecha: "2024-10-11",
  },
  {
    id: "12",
    nombre: "Carmen Flores",
    email: "carmen@example.com",
    numero: "3344667788",
    fecha: "2024-11-12",
  },
  {
    id: "13",
    nombre: "Carmen Flores",
    email: "carmen@example.com",
    numero: "3344667788",
    fecha: "2024-11-12",
  },
  {
    id: "14",
    nombre: "Carmen Flores",
    email: "carmen@example.com",
    numero: "3344667788",
    fecha: "2024-11-12",
  },
  {
    id: "15",
    nombre: "Carmen Flores",
    email: "carmen@example.com",
    numero: "3344667788",
    fecha: "2024-11-12",
  },
  {
    id: "16",
    nombre: "Carmen Flores",
    email: "carmen@example.com",
    numero: "3344667788",
    fecha: "2024-11-12",
  },
  {
    id: "17",
    nombre: "Carmen Flores",
    email: "carmen@example.com",
    numero: "3344667788",
    fecha: "2024-11-12",
  },
  {
    id: "18",
    nombre: "Carmen Flores",
    email: "carmen@example.com",
    numero: "3344667788",
    fecha: "2024-11-12",
  },
  {
    id: "19",
    nombre: "Carmen Flores",
    email: "carmen@example.com",
    numero: "3344667788",
    fecha: "2024-11-12",
  },
  {
    id: "20",
    nombre: "Carmen Flores",
    email: "carmen@example.com",
    numero: "3344667788",
    fecha: "2024-11-12",
  },
];

const ITEMS_POR_PAGINA = 6;

const Index = () => {
  const [search, setSearch] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("todos");
  const [paginaActual, setPaginaActual] = useState(1);

  // Filtrado de datos
  const datosFiltrados = data.filter((item) => {
    const nombreCoincide = item.nombre
      .toLowerCase()
      .includes(search.toLowerCase());

    const mesCoincide =
      selectedMonth === "todos" || item.fecha.split("-")[1] === selectedMonth;

    return nombreCoincide && mesCoincide;
  });

  // Paginación
  const totalPaginas = Math.ceil(datosFiltrados.length / ITEMS_POR_PAGINA);
  const indexInicio = (paginaActual - 1) * ITEMS_POR_PAGINA;
  const indexFin = indexInicio + ITEMS_POR_PAGINA;
  const datosPagina = datosFiltrados.slice(indexInicio, indexFin);

  return (
    <LinearGradient
      colors={["#FED78A", "#FFBF37"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 justify-center p-4"
    >
      <Text className="text-black text-3xl font-Poppins-ExtraBold text-center">
        Cupones
      </Text>
      <Text className="text-black text-center text-base">
        Aquí podrás ver los clientes registrados próximos a cumplir años.
      </Text>

      {/* Barra de búsqueda */}
      <View className="mt-6">
        <Text className="font-semibold text-xs text-black">Buscar</Text>
        <View className="flex-row items-center bg-gray-200 rounded-xl p-2 mt-2">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            className="flex-1 ml-2 text-base text-gray-700"
            placeholder="Ingresa el nombre..."
            placeholderTextColor="#888"
            value={search}
            onChangeText={(text) => {
              setSearch(text);
              setPaginaActual(1); // Reiniciar paginación al buscar
            }}
          />
        </View>
      </View>

      {/* Filtro por mes */}
      <View className="mt-6 w-48">
        <Text className="font-semibold">Filtrar por mes</Text>
        <View className="bg-gray-200 rounded-lg overflow-hidden mt-2">
          <Picker
            selectedValue={selectedMonth}
            onValueChange={(value) => {
              setSelectedMonth(value);
              setPaginaActual(1); // Reiniciar paginación al cambiar el filtro
            }}
            style={{ height: 50 }}
          >
            <Picker.Item label="Todos" value="todos" />
            {[
              "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
          ].map((mes, index) => (
            <Picker.Item
            key={index + 1}
            label={mes}
            value={(index + 1).toString().padStart(2, "0")}
              />
            ))}
          </Picker>
        </View>
      </View>

      {/* Tabla */}
      <View className="mt-3">
        <View className="flex-row bg-gray-300 p-3 rounded-md text-center">
          <Text className="flex-1 font-Poppins-Bold text-black text-base">
            Nombre
          </Text>
          <Text className="flex-1 font-Poppins-Bold text-black text-base">
            E-mail
          </Text>
          <Text className="flex-1 font-Poppins-Bold text-black text-base">
            Número
          </Text>
          <Text className="flex-1 font-Poppins-Bold text-black text-base">
            Fecha
          </Text>
        </View>

        <View className="flex-1 overflow-auto">
          <FlatList
            className="bg-gray-200"
            data={datosPagina}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-row border-b border-gray-400 p-3">
                <Text className="flex-1 text-black text-xs">{item.nombre}</Text>
                <Text className="flex-1 text-black text-xs">{item.email}</Text>
                <Text className="flex-1 text-black text-xs">{item.numero}</Text>
                <Text className="flex-1 text-black text-xs">{item.fecha}</Text>
              </View>
            )}
          />
        </View>
      </View>

      {/* Controles de paginación */}
      <View className="flex-row justify-between items-center bg-white py-3 px-5 rounded-b-lg shadow-md">
        {/* Botón Anterior */}
        <TouchableOpacity
          className={`px-4 py-2 rounded-lg ${
            paginaActual === 1 ? "bg-gray-300" : "bg-gray-200"
          }`}
          disabled={paginaActual === 1}
          onPress={() => setPaginaActual((prev) => prev - 1)}
        >
          <Text className="text-black font-medium">Anterior</Text>
        </TouchableOpacity>

        {/* Numeración de páginas */}
        <View className="flex-row items-center space-x-2">
          <Text
            className={`px-3 py-1 rounded-full font-semibold ${
              paginaActual === 1 ? "bg-yellow-400 text-black" : "text-black"
            }`}
          >
            1
          </Text>
          {paginaActual > 2 && <Text className="text-black">...</Text>}
          {paginaActual > 1 && paginaActual < totalPaginas && (
            <Text className="text-black">{paginaActual}</Text>
          )}
          {paginaActual < totalPaginas - 1 && (
            <Text className="text-black">...</Text>
          )}
          <Text className="text-black">{totalPaginas}</Text>
        </View>

        {/* Botón Siguiente */}
        <TouchableOpacity
          className={`px-4 py-2 rounded-lg ${
            paginaActual === totalPaginas ? "bg-gray-300" : "bg-gray-200"
          }`}
          disabled={paginaActual === totalPaginas}
          onPress={() => setPaginaActual((prev) => prev + 1)}
        >
          <Text className="text-black font-medium">Siguiente</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Index;
