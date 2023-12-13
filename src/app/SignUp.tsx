import { TouchableOpacity, Image, TextInput, Text, View, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router'
import styles from '../styles/styleCreate';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
const imagem = require('/Users/kaior/OneDrive/Área de Trabalho/Facisa/POO/AwesomeProject/assets/pkmarte.png')
const logo = require('/Users/kaior/OneDrive/Área de Trabalho/Facisa/POO/AwesomeProject/assets/logo.png')
import httpService from '../service/httpService';




export default function Create() {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const router = useRouter()

    const handleGoHome = async () => {
        const newUser = { name, user, email, pass }
        const result: any = await httpService.createUser(newUser)
        const data: any = await result.json()
        if (data.erro) {
           alert(data.error)

        }
        alert(data.message)
        router.push('/')
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}>

            <Image style={styles.imgs1} source={logo} />
            <Text style={styles.Title}>Poké  <Image style={styles.ImgPkeball} source={imagem} />  Mart</Text>
            <Text style={styles.textLogin}>Create your account</Text>
            <ScrollView style={{ width: '100%' }}>
                <Text style={styles.text}>Name:</Text>
                <TextInput style={styles.input} placeholder='Seu nome' value={name} onChangeText={(text) => setName(text)} />
                <Text style={styles.text} >E-mail:</Text>
                <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={(text) => setEmail(text)} />
                <Text style={styles.text} >User:</Text>
                <TextInput style={styles.input} placeholder='Ex. Krimpsz' value={user} onChangeText={(text) => setUser(text)} />
                <Text style={styles.text} >Password:</Text>
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} value={pass} onChangeText={(text) => setPass(text)} />
                <TouchableOpacity onPress={handleGoHome} style={styles.button}>
                    <Image style={styles.ImgPkeball} source={imagem} />
                </TouchableOpacity>

                <Text onPress={() => router.back()} style={styles.textBack}> I'm already a member</Text>
            </ScrollView>

        </KeyboardAvoidingView>
    )

}