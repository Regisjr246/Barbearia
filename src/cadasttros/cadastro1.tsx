import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function CadastroClienteScreen(): JSX.Element {
    const [step, setStep] = useState(1);

    function handleNextStep() {
        setStep(step + 1);
    }

    function handlePreviousStep() {
        setStep(step - 1);
    }

    function login() {
        const data = {
            email: '',
            password: '',
        }
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Cadastro Cliente</Text>

                {step === 1 && (
                    <>
                        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#333" onChangeText={(textNome) => (textNome)} />
                        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#333" onChangeText={(textEmail) => (textEmail)} />
                    </>
                )}

                {step === 2 && (
                    <>
                        <TextInput style={styles.input} placeholder="Celular" placeholderTextColor="#333" onChangeText={(textCelular) => (textCelular)} />
                        <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="#333" onChangeText={(textCPF) => (textCPF)} />
                    </>
                )}

                {step === 3 && (
                    <>
                        <TextInput style={styles.input} placeholder="Data de Nascimento" placeholderTextColor="#333" onChangeText={(textDataNascimento) => (textDataNascimento)} />
                        <TextInput style={styles.input} placeholder="Cidade" placeholderTextColor="#333" onChangeText={(textCidade) => (textCidade)} />
                        <TextInput style={styles.input} placeholder="Estado" placeholderTextColor="#333" onChangeText={(textEstado) => (textEstado)} />
                    </>
                )}

                {step === 4 && (
                    <>
                        <TextInput style={styles.input} placeholder="Pais" placeholderTextColor="#333" onChangeText={(textPais) => (textPais)} />
                        <TextInput style={styles.input} placeholder="Rua" placeholderTextColor="#333" onChangeText={(textRua) => (textRua)} />
                        <TouchableOpacity style={styles.button} onPress={() => { login() }}>
                            <Text style={styles.buttonText}>{step === 4 ? 'Cadastrar' : 'Cadastrar'}</Text>
                        </TouchableOpacity>
                    </>
                )}

                {step > 1 && (
                    <TouchableOpacity style={styles.button2} onPress={() => handlePreviousStep()}>
                        <Text style={styles.forgotPassword}>Voltar</Text>
                    </TouchableOpacity>
                )}

                {step < 4 && (
                    <TouchableOpacity style={styles.button2} onPress={() => handleNextStep() }>
                        <Text style={styles.forgotPassword}>Próximo</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2' // Alterei para um cinza claro
    },
    card: {
        backgroundColor: '#ffffff', // Fundo branco para o card
        width: 300,
        borderRadius: 20,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333333', // Título em tom de cinza escuro
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#e0e0e0', // Fundo cinza para os inputs
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#bdbdbd' // Cor da borda cinza claro
    },
    button: {
        backgroundColor: '#64b5f6', // Azul claro para o botão
        height: 40,
        borderRadius: 8
    },
    button2: {
        backgroundColor: '#757575', // Cinza para o botão secundário
        height: 30,
        borderRadius: 8,
        marginTop: 10
    },
    buttonText: {
        color: "#ffffff", // Branco para o texto
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40
    },
    forgotPassword: {
        color: '#3498DB', // Cor do texto azul claro
        textAlign: 'center',
        marginTop: 1
    },
});

export default CadastroClienteScreen;
