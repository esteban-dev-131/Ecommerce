import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./HomeStyles";
import useHome from "./useHome";

export default function Home() {
  // Un solo hook que devuelve toda la lógica
  const {
    image, nombre, setNombre, area, setArea,
    valor, setValor, productos,
    pickImage, crearProducto,
  } = useHome();

  // Solo JSX — cero lógica de negocio aquí
  return (
    <View style={styles.Padre}>
      <View>
        <Text style={styles.Titulo}>Ecommerce</Text>
      </View>

      <View style={styles.TarjetaFormulario}>
        <Text style={styles.Texto}>Nombre</Text>
        <View style={styles.CajaTexto}>
          <TextInput
            placeholder="Nombre"
            style={{ paddingHorizontal: 15 }}
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <Text style={styles.Texto}>Area</Text>
        <View style={styles.CajaTexto}>
          <TextInput
            placeholder="Area"
            style={{ paddingHorizontal: 15 }}
            value={area}
            onChangeText={setArea}
          />
        </View>

        <Text style={styles.Texto}>Valor Producto</Text>
        <View style={styles.CajaTexto}>
          <TextInput
            style={{ paddingHorizontal: 15 }}
            keyboardType="numeric"
            placeholder="Ingresa el valor"
            value={valor}
            onChangeText={setValor}
          />
        </View>

        <Text style={styles.Texto}>Agrega una imagen</Text>
        <View style={styles.PadreBoton}>
          {image && (
            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
          )}
          <TouchableOpacity onPress={pickImage} style={styles.CajaBoton}>
            <Text style={styles.TextoBoton}>Seleccionar Imagen</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.Texto}>¿Ya terminó el producto?</Text>
        <View style={styles.PadreBoton}>
          <TouchableOpacity onPress={crearProducto} style={styles.CajaBoton}>
            <Text style={styles.TextoBoton}>Crear Producto</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.Subtitulo}>Productos Creados</Text>
      <View style={styles.TarjetaFormulario}>
        <View style={styles.filaEncabezado}>
          <Text style={styles.celda}>Imagen</Text>
          <Text style={styles.celda}>Nombre</Text>
          <Text style={styles.celda}>Area</Text>
          <Text style={styles.celda}>Valor</Text>
        </View>
      </View>

      {productos.map((producto) => (
        <View style={styles.fila} key={producto.id}>
          <Image source={{ uri: producto.image }} style={styles.imagenProducto} />
          <Text style={styles.celda}>{producto.nombre}</Text>
          <Text style={styles.celda}>{producto.area}</Text>
          <Text style={styles.celda}>{producto.valor}</Text>
        </View>
      ))}

      {productos.length === 0 && (
        <Text style={{ textAlign: "center", marginTop: 10, color: "#999" }}>
          No hay productos creados aún
        </Text>
      )}
    </View>
  );
}