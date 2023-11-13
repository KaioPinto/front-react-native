import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from '../../styles/styleProfile';
import { ScrollView } from 'react-native-gesture-handler';


const Perfil = () => {
    const imagem = require('../../../assets/PokemarWhite.png');
    const name = 'Kaio Ricardo';
    const user = 'Kaio'
    const email = 'exemplo@gmail.com';
    const router = useRouter()

    const handleLogout = ()=>{
        router.push('/')
    }

    return (
        <SafeAreaView  style={styles.container}>
            <Image source={imagem} style={styles.img} />
            <View style={styles.containerCont}>
                <EvilIcons name="user" size={200} color="black" />
                <View style={styles.bloco}>
                    <Text style={styles.label}>Nome:</Text>
                    <Text style={styles.conteudoText}>{name}</Text>
                </View>
                <View style={styles.bloco}>
                    <Text style={styles.label}>Usuário:</Text>
                    <Text style={styles.conteudoText}>{user}</Text>
                </View>
                <View style={styles.bloco}>
                    <Text style={styles.label}>E-mail:</Text>
                    <Text style={styles.conteudoText}>{email}</Text>
                </View>
                <TouchableOpacity onPress={handleLogout} style={styles.button}>
                    <Text style={styles.texto}> Logout </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};

export default Perfil