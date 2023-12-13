import { View, ScrollView, Image, SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import style from '../styles/stylePurchase'
import { Card } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import httpService from '../service/httpService';
import { PurchaseHistoryItem } from '../util/interfacesResponse';
const imagem = require('../../assets/PokemarWhite.png')

const purchase = () => {
    const route = useRouter()
    const [historic, setHistoric] = useState<PurchaseHistoryItem[]>([]);
    const reqHistoric = async () => {
        const user = await AsyncStorage.getItem('Authorization')
        const result = await httpService.getHistoric(user)
        const data = await result.json()
        setHistoric(data)
    }

    const back = () => {
        route.back()
    }
    useEffect(() => {
        reqHistoric()
    }, [])

    return (
        <SafeAreaView style={style.container}>
            <View>
                <Image style={style.img} source={imagem} />
            </View>
            <View>
                <MaterialCommunityIcons onPress={back} name="keyboard-backspace" size={28} color="white" />
                <Text style={style.Title}> Histórico de compras</Text>
            </View>
            <ScrollView>
                {historic.length > 0 ? (
                    historic.map((item, index) => (
                        <Card key={index} containerStyle={style.cardStyle}>
                            <Text>{`Compras: ${item.iten}`}</Text>
                            <Text>{`Data: ${item.timestamp}`}</Text>
                            <Text>{`Valor da compra: R$${item.valueTotal}`}</Text>
                        </Card>
                    ))


                ) : (
                    <View>
                        <Card containerStyle={style.cardStyle}>
                            <Text> Não há compras</Text>

                        </Card>
                    </View>


                )}
                { }

            </ScrollView>



        </SafeAreaView>
    )
}

export default purchase