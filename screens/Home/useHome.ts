import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import type { ImagePickerAsset } from "expo-image-picker";
import type { Producto } from "../../types";

interface UseHomeReturn {
  image: string | null;
  nombre: string;
  setNombre: (text: string) => void;
  area: string;
  setArea: (text: string) => void;
  valor: string;
  setValor: (text: string) => void;
  productos: Producto[];
  pickImage: () => Promise<void>;
  crearProducto: () => void;
}

export default function useHome(): UseHomeReturn {
  const [image, setImage] = useState<string | null>(null);
  const [nombre, setNombre] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [productos, setProductos] = useState<Producto[]>([]);

  const pickImage = async (): Promise<void> => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso denegado", "No se otorgó acceso a la galería");
      return;
    }
    const result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1] as [number, number],
        quality: 0.5,
      });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const crearProducto = (): void => {
    if (!nombre || !area || !valor || !image) {
      Alert.alert("Campos incompletos", "Por favor completa todos los campos");
      return;
    }
    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre,
      area,
      valor,
      image,
    };
    setProductos((prev) => [...prev, nuevoProducto]);
    setNombre("");
    setArea("");
    setValor("");
    setImage(null);
  };

  return {
    image,
    nombre,
    setNombre,
    area,
    setArea,
    valor,
    setValor,
    productos,
    pickImage,
    crearProducto,
  };
}
