//se pone "rcns" para crear un componente de clase
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Se crea un componente de clase llamado Login y se pone como funcion
export default function Login() {
  return (
    // Se crea una vista padre para centrar el contenido
    <View style={styles.padre}>
      // Se crea una vista para la imagen de perfil
      <View>
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.profile}
        />
      </View>
      <View style={styles.tarjeta}>
        //Email
        <View style={styles.cajaTexto}>
          <TextInput placeholder="Email" style={{ paddingHorizontal: 15 }} />
        </View>
        //Contraseña
        <View style={styles.cajaTexto}>
          <TextInput placeholder="Password" style={{ paddingHorizontal: 15 }} />
        </View>
        // Boton de inicio de sesion
        <View style={styles.PadreBoton}>
          <TouchableOpacity style = {styles.CajaBoton}  >
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  //Estilo caja de Texto (TextInput)
  cajaTexto:{
    paddingVertical: 20,
    backgroundColor: '#cccccc40',
    borderRadius: 30,
    marginVertical: 10,
  },
  // Estilo para el boton de inicio de sesion
  PadreBoton:{
    alignItems:'center'
  },
  // Estilo para el texto del boton de inicio de sesion
  CajaBoton:{
    backgroundColor:'#525FE1',
    borderRadius:30,
    paddingVertical:20,
    paddingHorizontal:40,
    width:150,
    marginTop:20,
  },
  // Estilo para el texto del boton de inicio de sesion
  TextoBoton:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
  }


});
