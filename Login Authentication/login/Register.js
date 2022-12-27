import React, {useState} from "react";
import { Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, StyleSheet, TextInput } from "react-native";
import { auth } from "./App";

const Register = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function handleSignUp(){
        auth.createUserWithEmailAndPassword(userEmail, userPassword)
        .then((result) => {
          console.log(result)
        })
        .catch((error) => {
          console.log(error)
        })      
      }

        
    return (
        <KeyboardAvoidingView 
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <TextInput
                style={styles.inputField}
                placeholder="Email"
                value={userEmail}
                onChangeText={(text) => setUserEmail(text)}
                />
                <TextInput 
                style={styles.inputField}
                placeholder="Password"
                secureTextEntry={true}
                value={userPassword}
                onChangeText={(text) => setUserPassword(text)}
                />
                <View style={styles.buttons}>
                    
                    <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignUp}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    
                </View>
                <Text>Back to Login Page, Click on Login</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: 'blue'}}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View>
         
        </View>
            </View>
            
            </TouchableWithoutFeedback>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        flexDirection: 'column'
    },
    inputField: {
        height: '8%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10, 
        paddingLeft: 15,
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#008080',
        width: '45%',
        alignItems: 'center',
        margin: 20,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Register;