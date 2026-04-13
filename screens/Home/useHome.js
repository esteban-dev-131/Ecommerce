import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function useHome() {
  // --- Estados ---
  const [image, setImage] = useState(null);
  const [nombre, setNombre] = useState("");
  const [area, setArea] = useState("");
  const [valor, setValor] = useState("");
  const [productos, setProductos] = useState([]);

  // --- Funciones ---
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permiso denegado para acceder a la galería");
      return;
    }
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

  const crearProducto = () => {
    if (!nombre || !area || !valor || !image) {
      alert("Por favor completa todos los campos");
      return;
    }
    const nuevoProducto = {
      id: Date.now(),
      nombre, area, valor, image,
    };
    setProductos([...productos, nuevoProducto]);
    setNombre("");
    setArea("");
    setValor("");
    setImage(null);
  };

  // --- Retornar todo lo que la vista necesita ---
  return {
    image,
    nombre, setNombre,
    area, setArea,
    valor, setValor,
    productos,
    pickImage,
    crearProducto,
  };
}