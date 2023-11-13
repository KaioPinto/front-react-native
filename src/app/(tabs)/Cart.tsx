import { View, Text, Image, FlatList } from 'react-native'
import styles from '../../styles/styleCart'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { carrinho } from '../../util/carrinho';
import { Card } from '@rneui/themed';



const Cart = () => {

    const imagem = require('../../../assets/PokemarWhite.png');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.campoImg}>
                <Image style={styles.conteudoImg} source={imagem} />
            </View>

            {carrinho.length === 0 ? (<View style={styles.campoCont}>
                <MaterialIcons style={styles.icon} name="remove-shopping-cart" size={50} color="black" />
                <Text style={styles.conText}> Nada aqui <Entypo name="emoji-sad" size={15} color="black" /> </Text>
            </View>) : <FlatList data={carrinho} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <Card containerStyle={styles.cardStyle}>
                <Card.Title style={styles.titleCardStyle}> {item.name}</Card.Title>
                <Card.Image source={item.imgPath} style={styles.imgPqn} />
                <Text style={styles.textCard}> Price {item.value}</Text>
                <Card.Divider color='#ffff' />
                <Text>{item.description} </Text>





            </Card>} />}



        </SafeAreaView>
    )
}

export default Cart