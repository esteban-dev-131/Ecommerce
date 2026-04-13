import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: colors.white,
  },
  tarjeta: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    width: "90%",
    padding: 20,
    boxShadowColor: colors.textDark,
    boxShadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    boxShadow: "0px 2px 4px rgba(0,0,0,0.25)",
  },
  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: colors.inputBg,
    borderRadius: 30,
    marginVertical: 10,
  },
  PadreBoton: {
    alignItems: "center",
  },
  CajaBoton: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: 150,
    marginTop: 20,
  },
  TextoBoton: {
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
  },
});

export default styles;