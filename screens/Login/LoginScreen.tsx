import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";
import styles from "./LoginStyles";
import useLogin from "./useLogin";
import type { RootStackParamList } from "../../types";

type LoginScreenProps = StackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: LoginScreenProps) {
  const { email, setEmail, password, setPassword, logueo } = useLogin(navigation);

  return (
    <View style={styles.padre}>
      <View>
        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.profile}
        />
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput
            placeholder="Email"
            style={{ paddingHorizontal: 15 }}
            value={email}
            onChangeText={setEmail}
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
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.PadreBoton}>
          <TouchableOpacity style={styles.CajaBoton} onPress={logueo}>
            <Text style={styles.TextoBoton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
