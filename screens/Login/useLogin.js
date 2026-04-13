import { useState } from "react";
import { Alert } from "react-native";
import appFirebase from "../../credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

export default function useLogin(navigation) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Login", "Sesión iniciada correctamente");
      navigation.navigate("Home");
    } catch (error) {
      console.log("Error al iniciar sesión", error);
      Alert.alert("Login", error.message || "Error de red al iniciar sesión.");
    }
  };

  return { email, setEmail, password, setPassword, logueo };
}