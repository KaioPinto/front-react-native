import { Text, View, FlatList, SafeAreaView } from 'react-native'
import Barra from '../../components/Barra/Barra'
import styles from '../../styles/styleHome'
import { Card, FAB } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import httpService from '../../service/httpService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { iten } from '../../util/interfaces';
import { router } from 'expo-router';
import { ResponseLogin } from '../../util/interfacesResponse';
import storageService from '../../service/storageService';

export default function Home() {
    const [itens, setItens] = useState<iten[]>([]);
    



    const addIten = async (_id: any) => {
        const user = await AsyncStorage.getItem("Authorization")
        const response = await httpService.addCart(user, _id)


    }
    const openChat = () => {

        router.push('/Chat')
    }

    const addFavorites = async (_id: any) => {

        const user = await AsyncStorage.getItem("Authorization")
        const result = await httpService.favorites(user, _id);
        const date = await result.json()
        if (result.status === 200) {
            alert("Adicionado com sucesso")
        } else {
            alert("Algum erro aconteceu")
        }


    };

    useEffect(() => {
        const fetchIten = async () => {

            const user: any = await AsyncStorage.getItem('Authorization')
            const response = await httpService.getHome(user);
            const data = await response.json();
            setItens(data);


        }
        fetchIten();
    }, [])

    return (

        <SafeAreaView style={styles.container}>

            <Barra />

            <FlatList data={itens}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Card containerStyle={styles.cardStyle}>
                    <Card.Title style={styles.titleCardStyle}> {item.name}</Card.Title>
                    <View style={styles.styleView}>
                        <Card.Image source={{ uri: item.imgPath }} style={styles.conteudoImg} />
                        <Text style={styles.textCard}> Price {item.price}</Text>
                        <TouchableOpacity style={{ alignSelf: 'center', marginBottom: 12, marginLeft: 15 }} onPress={() => addFavorites(item._id)}>
                            <Text style={{ color: 'red' }}>❤️ </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { addIten({ _id: item._id }) }} style={styles.button}>
                            <Text style={{ color: 'black' }}> Buy </Text>
                        </TouchableOpacity>
                    </View>
                    <Card.Divider color='#ffff' />
                    <Text>{item.description} </Text>


                </Card>} />
            <FAB style={styles.fab}
                visible={true}
                icon={{ name: 'chat', color: 'white' }}
                color='red'
                onPress={() => openChat()} />


        </SafeAreaView >
    )
}
