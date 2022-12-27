import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Home from './Home';
import * as firebase from 'firebase';
import Register from './Register';

const firebaseConfig = {
  apiKey: "AIzaSyA_5OOCFMX3nYF1iKQOqsmsD37c51IsJSU",
  authDomain: "react-native-auth-app-6e5cd.firebaseapp.com",
  projectId: "react-native-auth-app-6e5cd",
  storageBucket: "react-native-auth-app-6e5cd.appspot.com",
  messagingSenderId: "476017429283",
  appId: "1:476017429283:web:2160ef66ed6569d86cda96"
};

let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const auth = firebase.auth();
export {auth};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="Register" component={Register} options={{ headerBackVisible:false}} /> 
      <Stack.Screen name="Home" component={Home} /> 
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
