//se pone "rcns" para crear un componente de clase
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

//importar firebase 
import appFirebase from '../credenciales'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
const auth = getAuth(appFirebase)


// Se crea un componente de clase llamado Login y se pone como funcion
export default function Login(props) {
  //Crear estados para email y contraseña

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Funcion para iniciar sesion

  const logueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Login", "Sesión iniciada correctamente");
      props.navigation.navigate("Home");
    } catch (error) {
      console.log("Error al iniciar sesión", error);
      Alert.alert("Login", error.message || "Error de red al iniciar sesión.");
    }
  };

  return(
  
    <View style={styles.padre}>
      <View>
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.profile}
        />
      </View>

      
      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput
            placeholder="Email"
            style={{ paddingHorizontal: 15 }}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.cajaTexto}>
          <TextInput
            placeholder="Password"
            style={{ paddingHorizontal: 15 }}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.PadreBoton}>
          <TouchableOpacity style={styles.CajaBoton} onPress={logueo} >
            <Text style={styles.TextoBoton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  // Estilo para la imagen de perfil
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "white",
  },
  //tarjeta que contiene el formulario de login, con sombra y borde redondeado
  tarjeta: {
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
  //Estilo caja de Texto (TextInput)
  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: "#cccccc40",
    borderRadius: 30,
    marginVertical: 10,
  },
  // Estilo para el boton de inicio de sesion
  PadreBoton: {
    alignItems: "center",
  },
  // Estilo para el texto del boton de inicio de sesion
  CajaBoton: {
    backgroundColor: "#525FE1",
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: 150,
    marginTop: 20,
  },
  // Estilo para el texto del boton de inicio de sesion
  TextoBoton: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
