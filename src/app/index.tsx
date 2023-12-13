
import { TouchableOpacity, Image, TextInput, Text, View } from 'react-native';
import styles from '../styles/styleLogin';
import { Link, useRouter } from 'expo-router'
import httpService from '../service/httpService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react'
import storageService from '../service/storageService';
const imagem = require('/Users/kaior/OneDrive/Área de Trabalho/Facisa/POO/AwesomeProject/assets/pkmarte.png')
const logo = require('/Users/kaior/OneDrive/Área de Trabalho/Facisa/POO/AwesomeProject/assets/logo.png')
export default function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const router = useRouter()
    const handleHome = async () => {
        const user = { email, pass }
        const result: any = await httpService.loginUser(user)
        const data: any = await result.json()
        if (data.erro) {
            alert(data.erro)
        }
        AsyncStorage.setItem("Authorization", "Bearer " + data.userData.token)
        storageService.save('userData', data.userData);
        router.push("/Home")
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imgs1} source={logo} />
            <Text style={styles.Title}>Poké <Image style={styles.ImgPkeball} source={imagem} /> Mart</Text>
            <Text style={styles.textLogin}>
                Login
            </Text>
            <TextInput placeholder='E-mail' style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
            <TextInput placeholder='Password' style={styles.input} secureTextEntry={true} onChangeText={(text) => setPass(text)} value={pass} />
            <View></View>
            <Link href={"./SignUp"}>
                <Text style={styles.textAccount}> Dont have an account?  Sign up </Text>
            </Link>
            <TouchableOpacity onPress={handleHome} style={styles.button}>
                <Image style={styles.ImgPkeball} source={imagem} />
            </TouchableOpacity>
        </View>
    );
}

