import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { Card } from '@rneui/themed';
import httpService from '../service/httpService';
import styles from '../styles/stylePurchase';
import { iten } from '../util/interfaces';
import { View, ScrollView, Image, SafeAreaView, Text } from 'react-native'
const imagem = require('../../assets/PokemarWhite.png')
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';




function favorites() {
    const route = useRouter()
    const [favoritos, setFavoritos] = useState<iten[]>([]);



    const reqFavoritos = async () => {
        const user = await AsyncStorage.getItem('Authorization')
        const result = await httpService.getFavoritos(user)
        const data = await result.json()
        setFavoritos(data.favorites)
    }


    const remove = async (_id: any) => {
        console.log(_id)
        const user = await AsyncStorage.getItem("Authorization")
        const result = await httpService.removeFavorites(user, _id)
        setFavoritos((prevFavorites) =>
            prevFavorites.filter((item) => item._id !== _id)
        );
    }

    const back = () => {
        route.back()
    }
    useEffect(() => {
        reqFavoritos()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.img} source={imagem} />

            </View>
            <View>
                <MaterialCommunityIcons onPress={back} name="keyboard-backspace" size={28} color="white" />
                <Text style={styles.Title}> Itens favoritos</Text>
            </View>
            <ScrollView>
                {favoritos.length > 0 ? (
                    favoritos.map((item, index) => (
                        <Card key={index} containerStyle={styles.cardStyle}>
                            <Text>{`Item: ${item.name}`}</Text>
                            <TouchableOpacity onPress={() => remove(item._id)}>
                                <Ionicons name="trash-outline" size={24} color="grey" />
                            </TouchableOpacity>
                        </Card>
                    ))

                ) : (
                    <View>
                        <Card containerStyle={styles.cardStyle}>
                            <Text> Não há favoritos</Text>

                        </Card>
                    </View>


                )}
                { }

            </ScrollView>



        </SafeAreaView>
    )
}

export default favorites