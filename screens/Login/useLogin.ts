import { useState } from "react";
import { Alert } from "react-native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import type { Auth } from "firebase/auth";
import appFirebase from "../../api/credenciales";
import type { RootStackParamList } from "../../types";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

interface UseLoginReturn {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  logueo: () => Promise<void>;
}

const auth: Auth = getAuth(appFirebase);

export default function useLogin(navigation: LoginScreenNavigationProp): UseLoginReturn {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const logueo = async (): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Login", "Sesión iniciada correctamente");
      navigation.navigate("Home");
    } catch (error: unknown) {
      console.log("Error al iniciar sesión", error);
      const message =
        error instanceof Error ? error.message : "Error de red al iniciar sesión.";
      Alert.alert("Login", message);
    }
  };

  return { email, setEmail, password, setPassword, logueo };
}
