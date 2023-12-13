import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import styles from '../../styles/styleCart'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@rneui/themed';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import httpService from '../../service/httpService';
import { Payload } from '../../util/interfacesResponse';
const imagem = require('../../../assets/PokemarWhite.png');




const Cart = () => {
    const [cart, setCart] = useState<Payload>();

    const [total, setTotal] = useState(0)

    const buy = async () => {
        const user = await AsyncStorage.getItem("Authorization")
        const result = await httpService.finishBuy(user)
        const data = await result.json()

    }
    const findcart = async () => {
        const user = await AsyncStorage.getItem("Authorization")
        const result = await httpService.getCart(user)
        const data = await result.json()
        setCart(data)
    }
    const calcTotal = async () => {
        findcart();
        let valor = 0
        cart?.iten.forEach((elemento) =>
            valor += elemento.identifier.price * elemento.amount
        )
        setTotal(valor)
    }

    const removeItem = async (_id: any) => {
        const user = await AsyncStorage.getItem("Authorization")
        const result = await httpService.deleteIten(user, _id)
        const data = await result.json()
        findcart();
        calcTotal();

    }

    useEffect(() => {
        findcart()
    }, []);
    useEffect(() => {
       
        calcTotal()
    }, [cart]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.campoImg}>

                <Image style={styles.conteudoImg} source={imagem} />
            </View>
            {cart?.iten && cart.iten.length > 0 ? <View>
                <FlatList
                    data={cart?.iten}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Card containerStyle={styles.cardStyle}>
                            <Card.Title style={styles.titleCardStyle}>{item.identifier.name}</Card.Title>
                            <View style={styles.styleView}>
                                <Card.Image source={{ uri: item.identifier.imgPath }} style={styles.imgPqn} />
                                <Text style={styles.textCard}> Price {item.identifier.price}</Text>
                                <Text style={styles.textCard}> Amount {item.amount}</Text>
                                <TouchableOpacity onPress={(() => { removeItem({ _id: item.identifier._id }) })} style={styles.button}>
                                    <Text style={{ color: 'black' }}> Remove </Text>
                                </TouchableOpacity>
                            </View>
                            <Card.Divider color='#ffff' />
                        </Card>
                    )}
                />
                <TouchableOpacity style={styles.buttonFinalizar}>
                    <Text onPress={() => { buy() }} style={styles.contText}> {`Finalizar R$${total}`} </Text>
                </TouchableOpacity>
            </View> :

                (<View style={styles.campoCont}>
                    <MaterialIcons style={styles.icon} name="remove-shopping-cart" size={50} color="black" />
                    <Text style={styles.conText}> Nada aqui <Entypo name="emoji-sad" size={15} color="black" /> </Text>
                </View>)}




        </SafeAreaView >
    )
}

export default Cart