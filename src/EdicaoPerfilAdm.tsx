import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

function EdicaoScreen(): JSX.Element {
    return (
        <View style={styles.container}>

<View>
    <TouchableOpacity><Text>X</Text></TouchableOpacity>
</View>



            <View><Text>Editar Pefil Adm</Text>
            </View>

<View>


</View>
            <View>
                <Text>Nome</Text>
                <TextInput placeholder="Nome" placeholderTextColor="#333" />
            </View>

            <View>
                <Text>CPF</Text>
                <TextInput placeholder="CPF" placeholderTextColor="#333" />

            </View>


            <View>
                <Text>E-mail</Text>
                <TextInput placeholder="CPF" placeholderTextColor="#333" />

            </View>

            <View>
                <Text>Data de Nascimento</Text>
                <TextInput placeholder="N" placeholderTextColor="#333" />

            </View>

            <View>

                <Text>Cargo</Text>
                <TextInput placeholder="Nome" placeholderTextColor="#333" />

            </View>

        </View>




    );







}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#fff'
    },
});
export default EdicaoScreen;



