import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';
import styles from '../../styles/styleProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import httpService from '../../service/httpService';
import { pessoa } from '../../util/interfaces';
const imagem = require('../../../assets/PokemarWhite.png');
import * as ImagePicker from 'expo-image-picker';

const Perfil = () => {
    const [atributos, setAtributos] = useState<pessoa>()

    const getProfile = async () => {
        const user = await AsyncStorage.getItem("Authorization")
        const result = await httpService.getUser(user)
        const data = await result.json()
        setAtributos(data)
    }
    useEffect(() => {

        getProfile()
    }, [])

    const router = useRouter()

    const handleLogout = async () => {
        await AsyncStorage.clear()
        router.push('/')
    }
    const handleCompras = () => {
        router.push('/purchase')
    }
    const handleFavoritos = () => {
        router.push('/favorites')
    }

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        })


        if (!result.canceled) {
            const img = result.assets[0].base64
            const user = await AsyncStorage.getItem("Authorization")
            const response = await httpService.sendImage(user, { img: img })
            const data = await response.json()
            alert("Sucesso")

        }
        else {
            alert("Solcitacação cancelada")
        }
        getProfile()
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={imagem} style={styles.img} />
            <View style={styles.containerCont}>
                <TouchableOpacity onPress={pickImage}>
                    {atributos ? (
                        <Image source={{ uri: 'data:image/jpeg;base64,' + atributos.profile }} style={styles.imgPerfil} />
                    ) : (
                        <EvilIcons name="user" size={200} color="black" />
                    )}

                </TouchableOpacity>
                <View style={styles.bloco}>
                    <Text style={styles.label}>Nome:</Text>
                    <Text style={styles.conteudoText}>{atributos?.name}</Text>
                </View>
                <View style={styles.bloco}>
                    <Text style={styles.label}>Usuário:</Text>
                    <Text style={styles.conteudoText}>{atributos?.user}</Text>
                </View>
                <View style={styles.bloco}>
                    <Text style={styles.label}>E-mail:</Text>
                    <Text style={styles.conteudoText}>{atributos?.email}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={handleLogout} style={styles.button}>
                        <Text style={styles.texto}> Logout </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCompras} style={styles.button}>
                        <Text style={styles.texto}> Compras </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleFavoritos} style={styles.button}>
                        <Text style={styles.texto}> Favoritos </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>

    );
};

export default Perfil