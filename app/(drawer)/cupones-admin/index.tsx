import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import * as FileSystem from "expo-file-system";
import * as XLSX from "xlsx";

const dataInicial = [
  {
    id: "1",
    nombre: "Juan Pérez",
    email: "correo@gmail.com",
    numero: "1234567890",
    fecha: "15-01-2024",
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
];

const ITEMS_POR_PAGINA = 6;

const Index = () => {
  const [search, setSearch] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("todos");
  const [paginaActual, setPaginaActual] = useState(1);
  const [data, setData] = useState(dataInicial);
  const [modalVisible, setModalVisible] = useState(false);
  const [usuarioAEliminar, setUsuarioAEliminar] = useState<string | null>(null);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<string | null>(null);

  const editarUsuario = (id: string) => {
    console.log("Editar usuario con ID:", id);
  };

  const enviarCupones = () =>{
    console.log("Enviando cupones...");
  }

  const descargarExcel = async () => {
    // Datos de ejemplo para crear el archivo Excel
    const data = [
      { Nombre: "Juan", Edad: 30, Ciudad: "Madrid" },
      { Nombre: "Ana", Edad: 25, Ciudad: "Barcelona" },
      { Nombre: "Luis", Edad: 35, Ciudad: "Valencia" },
    ];

    // Crear un libro de trabajo (workbook)
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Datos");

    // Generar el archivo Excel en formato binario
    const excelData = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

    // Convertir el contenido binario a un formato adecuado para guardarlo como archivo
    const fileUri = FileSystem.documentDirectory + "datos.xlsx";

    try {
      // Guardar el archivo en el sistema de archivos
      await FileSystem.writeAsStringAsync(fileUri, excelData, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      alert(
        "Archivo Excel descargado exitosamente! Puedes encontrarlo en la carpeta de documentos."
      );
    } catch (error) {
      console.error("Error al crear el archivo Excel", error);
      alert("Hubo un error al descargar el archivo.");
    }
  };

  const eliminarUsuario = (id: string) => {
    setUsuarioAEliminar(id);
    setModalVisible(true);
  };

  const confirmarEliminacion = () => {
    if (usuarioAEliminar) {
      setData(data.filter((item) => item.id !== usuarioAEliminar));
      setModalVisible(false);
      setUsuarioAEliminar(null);
    }
  };

  const cancelarEliminacion = () => {
    setModalVisible(false);
    setUsuarioAEliminar(null);
  };

  const datosFiltrados = data.filter((item) => {
    const nombreCoincide = item.nombre
      .toLowerCase()
      .includes(search.toLowerCase());
    const mesCoincide =
      selectedMonth === "todos" || item.fecha.split("-")[1] === selectedMonth;
    return nombreCoincide && mesCoincide;
  });

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
      <Text className="text-black text-3xl font-Poppins-ExtraBold text-center mt-8">
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
              setPaginaActual(1);
            }}
          />
        </View>
      </View>

      <Text className="font-semibold mt-5">Filtrar por mes</Text>
      <View className="flex-row items-center justify-between gap-4">
        <View className="w-36">
          <View className="bg-gray-200 rounded-lg overflow-hidden mt-2">
            <Picker
              selectedValue={selectedMonth}
              onValueChange={(value) => {
                setSelectedMonth(value);
                setPaginaActual(1);
              }}
              style={{ height: 50 }}
            >
              <Picker.Item label="Todos" value="todos" />
              {[
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
              ].map((mes, index) => (
                <Picker.Item
                  key={index}
                  label={mes}
                  value={(index + 1).toString().padStart(2, "0")}
                />
              ))}
            </Picker>
          </View>
        </View>

        <TouchableOpacity
          onPress={enviarCupones}
          className="p-2 rounded-lg"
          style={{ backgroundColor: "#175203" }}
        >
          <Text className="text-white text-sm font-Poppins-Regular p-1 w-full">
            Enviar cupones
          </Text>
        </TouchableOpacity>

        {/* Botón Descargar Excel */}
        <TouchableOpacity
          onPress={descargarExcel}
          className="p-2 rounded-lg"
          style={{ backgroundColor: "#175203" }}
        >
          <Text className="text-white text-sm font-Poppins-Regular p-1 w-full">
            Descargar Excel
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 overflow-auto">
        <View className="mt-3">
          <View className="flex-row bg-gray-300 p-3 rounded-md text-center">
            <Text className="flex-1 font-Poppins-Bold text-black text-base">
              Nombre
            </Text>
            <Text className="flex-1 font-Poppins-Bold text-black">E-mail</Text>
            <Text className="flex-1 font-Poppins-Bold text-black text-base">
              Número
            </Text>
            <Text className="flex-1 font-Poppins-Bold text-black text-base">
              Fecha
            </Text>
            <Text className="flex-1 font-Poppins-Bold text-black text-base">
              Acciones
            </Text>
          </View>

          {/* Lista de datos */}
          <View className="overflow-auto" style={{ maxHeight: 300 }}>
            <FlatList
              className="bg-gray-200"
              data={datosPagina}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="flex-row border-b border-gray-400 p-3">
                  <Text className="flex-1 text-black text-xs">
                    {item.nombre}
                  </Text>
                  <Text className="flex-1 text-black text-xs">
                    {item.email}
                  </Text>
                  <Text className="flex-1 text-black text-xs">
                    {item.numero}
                  </Text>
                  <Text className="flex-1 text-black text-xs">
                    {item.fecha}
                  </Text>
                  <View className="flex-1 flex-row justify-between space-x-2">
                    <TouchableOpacity
                      onPress={() => editarUsuario(item.id)}
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: "#523903" }}
                    >
                      <Ionicons name="create" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setUsuarioSeleccionado(item.nombre);
                        eliminarUsuario(item.id);
                      }}
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: "#523903" }}
                    >
                      <Ionicons name="trash" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>

        {/* Modal de confirmación de eliminación */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={cancelarEliminacion}
        >
          <View
            className="flex-1 justify-center items-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.46)" }}
          >
            <View>
              <View className="bg-red-600 items-center rounded-t-lg">
                <Ionicons name="alert" size={50} color="white" />
              </View>
              <View className="bg-white p-4 rounded-b-lg">
                <Text className="text-center text-lg font-semibold text-black">
                  Deseas eliminar el usuario: {usuarioSeleccionado}?
                </Text>
                <View className="flex-row justify-around mt-4">
                  <TouchableOpacity
                    onPress={cancelarEliminacion}
                    className="bg-gray-300 p-2 rounded-lg"
                  >
                    <Text className="text-black">Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={confirmarEliminacion}
                    className="bg-red-600 p-2 rounded-lg"
                  >
                    <Text className="text-white">Eliminar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

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
              {paginaActual}
            </Text>
            {paginaActual < totalPaginas && (
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
      </View>
    </LinearGradient>
  );
};

export default Index;
