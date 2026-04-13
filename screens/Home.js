import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import * as ImagePicker from "expo-image-picker";

/*Sesion para Crear productos: Nombre, Area, Valor producto y que se
pueda ver el producto creado adentro de una tabla*/

export default function Home() {
  /*  */
  const [image, setImage] = useState(null);
  const[nombre, setNombre] = useState("");
  const[area, setArea] = useState("");
  const[valor, setValor] = useState("");

  const[productos, setProductos] = useState([]);

  //funcion para seleccionar imagen de la galeria del celular
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permiso denegado para acceder a la galería de imágenes");
      return;
    }
    // Abrir la galería de imágenes para seleccionar una imagen
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

   //funcion crear prooducto
   const crearProducto = () => {
    if(!nombre || !area || !valor || !image){
      alert("Por favor completa todos los campos");
      console.log("Campos incompletos: ", {nombre, area, valor, image});
      return;
    }

    // Crear un nuevo producto con los datos ingresados
    const nuevoProducto = {
      id: Date.now(),
      nombre: nombre,
      area: area,
      valor: valor,
      image: image,
    };

    setProductos([...productos, nuevoProducto]);

    // Limpiar los campos del formulario después de crear el producto
    setNombre("");
    setArea("");
    setValor("");
    setImage(null);


   }

  // Diseño de la pantalla de inicio con un formulario para crear productos
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
          ></TextInput>
        </View>

        <Text style={styles.Texto}>Area</Text>
        <View style={styles.CajaTexto}>
          <TextInput
            placeholder="Area"
            style={{ paddingHorizontal: 15 }}
            value={area}
            onChangeText={setArea}
          ></TextInput>
        </View>

        <Text style={styles.Texto}>Valor Producto</Text>
        <View style={styles.CajaTexto}>
          <TextInput
            style={{ paddingHorizontal: 15 }}
            keyboardType="numeric" // 0 "number-pad"
            placeholder="Ingresa el valor"
            value={valor}
            onChangeText={setValor}
          ></TextInput>
        </View>

        <Text style={styles.Texto}>Agrega una imagen</Text>

        <View style={styles.PadreBoton}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100 }}
            />
          )}
          <TouchableOpacity onPress={pickImage} style={styles.CajaBoton}>
            <Text style={styles.TextoBoton}>Seleccionar Imagen</Text>
          </TouchableOpacity>
        </View>

                <Text style={styles.Texto}>¿Ya termino el producto?</Text>
        <View style={styles.PadreBoton}>
          {/*Boton crear producto*/}
          <TouchableOpacity onPress={crearProducto} style={styles.CajaBoton}>
            <Text style={styles.TextoBoton}>Crear Producto</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Text style={styles.Subtitulo}>Productos Creados</Text>
      <View style={styles.TarjetaFormulario}>
        <View style={styles.filaEncabezado}>
          {/*  Encabezado de la tabla */}
          <Text style={styles.celda}>Imagen</Text>
          <Text style={styles.celda}>Nombre</Text>
          <Text style={styles.celda}>Area</Text>
          <Text style={styles.celda}>Valor</Text>
        </View>
      </View>

      {productos.map((producto) => (
        <View style={styles.fila} key={producto.id}>
          <Image source={{uri: producto.image}} style={styles.imagenProducto} />
          <Text style={styles.celda}>{producto.nombre}</Text>
          <Text style={styles.celda}>{producto.area}</Text>
          <Text style={styles.celda}>{producto.valor}</Text>
        </View>
      ))}
      {/* Mensaje si no hay productos creados */}
      {productos.length === 0 && (
        <Text style={{textAlign: "center", marginTop: 10, color: "#999"}}>No hay productos creados aún</Text>
      )}

      



      

    </View>
  );
}

// Estilos para la pantalla de inicio
const styles = StyleSheet.create({
  Padre: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  Titulo: {
    marginTop: 50,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },

  Texto: {
    fontSize: 15,
    fontWeight: "bold",
  },

  TarjetaForm: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 20,
    boxShadowColor: "#000",
    boxShadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    boxShadow: "0px 2px 4px rgba(0,0,0,0.25)",
  },

  CajaTexto: {
    paddingVertical: 20,
    backgroundColor: "#cccccc40",
    borderRadius: 30,
    marginVertical: 10,
  },
  PadreBoton: {
    alignItems: "center",
  },
  CajaBoton: {
    backgroundColor: "#525FE1",
    borderRadius: 30,
    paddingVertical:0,
    paddingHorizontal: 20,
    width: 200,
    margin: 10,
  },
  TextoBoton: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },

  Subtitulo:{
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  filaEncabezado:{
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 8,
    marginBottom: 8,
  },
  fila:{
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  celda:{
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    marginHorizontal: 2,
  },
  imagenProducto: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 6,
  }


});
