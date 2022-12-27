import { useNavigation } from '@react-navigation/native';
import {Text, View, Button, StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from "./App";
import Login from './Login';

export default function Home() {

  const navigation = useNavigation();

  function signOut(){
    auth
    .signOut()
    .then(() => {
      navigation.replace('Login');
    })
    .catch(error => console.log(error))
  }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.search} placeholder='Search' />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.user}>    
          <Text>Email: {auth.currentUser?.email}</Text>
          <Button title='Sign Out' onPress={signOut}/>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    search: {
      height: 40,
      backgroundColor: 'white',
      width: '100%',
      paddingLeft: 10,
      borderRadius: 20
    },
    user: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#008080',
      borderRadius: 20,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20
    },
    searchText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '600'
    }
  })