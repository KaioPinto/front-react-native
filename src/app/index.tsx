
import { TouchableOpacity, Image, TextInput, Text, View } from 'react-native';
import styles from '../styles/styleLogin';
import { Link, useRouter } from 'expo-router'
const imagem = require('/Users/kaior/OneDrive/Área de Trabalho/Facisa/POO/AwesomeProject/assets/pkmarte.png')

const logo = require('/Users/kaior/OneDrive/Área de Trabalho/Facisa/POO/AwesomeProject/assets/logo.png')
export default function Login() {

    const router = useRouter()
    const handleHome = () => {
        router.push('/Home')
    }

    return (
        <View style={styles.container}>


            <Image style={styles.imgs1} source={logo} />
            <Text style={styles.Title}>Poké <Image style={styles.ImgPkeball} source={imagem} /> Mart</Text>
            <Text style={styles.textLogin}>
                Login
            </Text>
            <TextInput placeholder='E-mail' style={styles.input} />
            <TextInput placeholder='Password' style={styles.input} />
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

