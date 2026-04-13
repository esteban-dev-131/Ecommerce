import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

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

export default styles;