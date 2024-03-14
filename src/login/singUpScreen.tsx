import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

function SingUpScreen(): JSX.Element {

const[email,setEmail]=useState("");
const[passsord,setPassword]=useState("");





function login(){
    const dados={
        email:email,
        passsord:passsord,
    }

console.log(dados);

}





    return (
        <View style={styles.container}>

<Text style={styles.title}>Vamos começar!</Text>

           
                 
<Image style={styles.logoBarbearia} resizeMode='contain' source={require('../assets/imagens/login.png')} />
            <View >
           
              
                
           
            
             
               
                <TouchableOpacity style={styles.button}  onPress={()=>{login() }}>
                    <Text style={styles.buttonText} > Cadastrar</Text>
                </TouchableOpacity>

               


                
                

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#751aff'
    },

    logo: {
        width: 80,
        height: 80,
        left:90
    },


    logoBarbearia:{
        width:400,
        height: 400,
        marginBottom: 20,
        marginTop: -150
    },

    card: {
        backgroundColor: "#FFFFFF",
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    title: {
        fontSize: 65,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 160,
        textAlign: 'center',
    },

    input: {
        backgroundColor: '#D7D4D1',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F76900'
    },


    button: {
        backgroundColor: '#f5f5f0',
        height: 50,
        borderRadius: 100,
          width:300,
          fontWeight: 'bold'
        
    },
  

    buttonText: {
        color: "#c65353",
        textAlign: 'center',
        marginTop:3,
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 40
    },

    forgotPassword:{
       color:'#836FFF',
       textAlign:'center',
       marginTop:10, 
    },
    forgotSingin:{
        color:'#836FFF',
        textAlign:'center',
        marginTop:0, 
    }








});

export default SingUpScreen;