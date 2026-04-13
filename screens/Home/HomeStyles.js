import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  Padre: {
    flex: 1,
    backgroundColor: colors.white,
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
  // ... el resto de tus estilos exactamente igual,
  // pero usando colors.primary en lugar de "#525FE1"
});

export default styles;