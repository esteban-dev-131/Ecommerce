import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import StackNavigator
import 'react-native-gesture-handler';
// import navigation container
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import screens
import Login from './screens/Login/LoginScreen';
import Home from './screens/Home/HomeScreen';

/*Main Component*/
export default function App() {

const Stack = createStackNavigator();

//Stack Navigator
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
      // Opciones para el header de la pantalla de login
      options={{
        title:'LOGIN',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#525FE1',
        },
      }}/>
      <Stack.Screen name="Home" component={Home}
      //Lo mismo para la pantalla de home
      options={{
        title:'HOME',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#525FE1',
        },
      }} />
    </Stack.Navigator>
  );
}



  return (
  <NavigationContainer>
    <MyStack/>
  </NavigationContainer>
  );
}
/*Styles*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
