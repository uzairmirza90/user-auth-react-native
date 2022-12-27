import { View, 
        Text, 
        TextInput, 
        StyleSheet, 
        KeyboardAvoidingView, 
        TouchableOpacity,
        TouchableWithoutFeedback,
        Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "./App";
import { useNavigation } from "@react-navigation/native";

export default function Login({navigation}) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');


    useEffect(() => {
       const unsubscribe =  auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace('Home')
            }
        })
        return unsubscribe;
    }, [])

    function handleLogin(){
        auth.signInWithEmailAndPassword(userEmail, userPassword)
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
            onChangeText={email => setUserEmail(email)}
            />
            <TextInput 
            style={styles.inputField}
            placeholder="Password"
            secureTextEntry={true}
            value={userPassword}
            onChangeText={password => setUserPassword(password)}
            />
            <View style={styles.buttons}>
                <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
            </View>
            <Text>If you are not already registered, Click on register </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{color: 'blue'}}>Register</Text>
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