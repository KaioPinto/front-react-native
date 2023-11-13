import { TouchableOpacity, Image, TextInput, Text, View, Button } from 'react-native';
import { Link, useRouter } from 'expo-router'
import styles from '../styles/styleCreate';
const imagem = require('/Users/kaior/OneDrive/Área de Trabalho/Facisa/POO/AwesomeProject/assets/pkmarte.png')
const logo = require('/Users/kaior/OneDrive/Área de Trabalho/Facisa/POO/AwesomeProject/assets/logo.png')
export default function Create() {
    const router = useRouter()

    const handleGoHome = () => {
        router.push('/Home')
    }




    return (
        <View style={styles.container}>
            <Image style={styles.imgs1} source={logo} />
            <Text style={styles.Title}>Poké  <Image style={styles.ImgPkeball} source={imagem} />  Mart</Text>
            <Text style={styles.textLogin}>Create your account</Text>
            <Text style={styles.text}>Name:</Text>
            <TextInput style={styles.input} placeholder='Ex. Kaio Ricardo' />
            <Text style={styles.text} >E-mail:</Text>
            <TextInput style={styles.input} placeholder='Ex. kaio@gmail.com' />
            <Text style={styles.text} >User:</Text>
            <TextInput style={styles.input} placeholder='Ex. Krimpsz' />
            <Text style={styles.text} >Password:</Text>
            <TextInput style={styles.input} placeholder='Min. 6 caracteres' />
            <TouchableOpacity onPress={handleGoHome} style={styles.button}>
                <Image style={styles.ImgPkeball} source={imagem} />
            </TouchableOpacity>

            <Text onPress={()=> router.back()} style={styles.textBack}> I'm already a member</Text>


        </View>
    )

}