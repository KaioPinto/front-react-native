import { Text, View, FlatList, SafeAreaView } from 'react-native'
import Barra from '../../components/Barra/Barra'
import styles from '../../styles/styleHome'
const imagem = require('../../../assets/imgLogo.png');
import { Card } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { carrinho } from '../../util/carrinho';
import { Item } from '../../util/item';
const data = [
    {
        id: 0,
        name: 'MasterBall',
        description: 'The best Ball with the ultimate performance. It will catch any wild Pokémon without fail.',
        value: 'R$ 9999,99',
        imgPath: require('../../../assets/masterball.png')
    },
    {
        id: 1,
        name: 'MaxPotion',
        value: 'R$ 3000,00',
        description: 'Fully restores HP that have been lost in battle.',
        imgPath: require('../../../assets/itens.png')

    },
    {
        id: 2,
        name: 'RockSmash',
        description: 'A Fighting-type attack. In the field, it can be used to shatter rocks and open new paths.',
        value: 'R$ 4500,00',
        imgPath: require('../../../assets/rocksmash.png')
    },
    {
        id: 3,
        name: 'FireStone',
        description: 'A Stone used for making certain kinds of Pokémon evolve.',
        value: 'R$ 7000,00',
        imgPath: require('../../../assets/firestone.png')
    },
    // {
    //     id: 4,
    //     name: 'FireStone',
    //     value: 'R$ 700,00',
    //     imgPath: require('../../../assets/firestone.png')
    // },
    // {
    //     id: 5,
    //     name: 'FireStone',
    //     value: 'R$ 700,00',
    //     imgPath: require('../../../assets/firestone.png')
    // },
    // {
    //     id: 6,
    //     name: 'FireStone',
    //     value: 'R$ 700,00',
    //     imgPath: require('../../../assets/firestone.png')
    // },
    // {
    //     id: 7,
    //     name: 'FireStone',
    //     value: 'R$ 700,00',
    //     imgPath: require('../../../assets/firestone.png')
    // },
    // {
    //     id: 8,
    //     name: 'FireStone',
    //     value: 'R$ 700,00',
    //     imgPath: require('../../../assets/firestone.png')
    // },
    // {
    //     id: 9,
    //     name: 'FireStone',
    //     value: 'R$ 700,00',
    //     imgPath: require('../../../assets/firestone.png')
    // },
    // {
    //     id: 10,
    //     name: 'FireStone',
    //     value: 'R$ 700,00',
    //     imgPath: require('../../../assets/firestone.png')
    // }
]
export default function Home() {
    const addCart = (item: Item) => {
        const itemExists: boolean | undefined = carrinho.some((produto) => produto.id === item.id);

        if (itemExists === undefined) {
            carrinho.push(item);
            console.log('Array vazio');
        } else if (!itemExists) {
            carrinho.push(item);
            console.log('aq 2');
        } else {
            console.log('Item já existe no carrinho');
        }

    }



    return (

        <SafeAreaView style={styles.container}>

            <Barra />

            <FlatList data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Card containerStyle={styles.cardStyle}>
                    <Card.Title style={styles.titleCardStyle}> {item.name}</Card.Title>
                    <View style={styles.styleView}>
                        <Card.Image source={item.imgPath} style={styles.conteudoImg} />
                        <Text style={styles.textCard}> Price {item.value}</Text>

                        <TouchableOpacity onPress={() => addCart(item)} style={styles.button}>
                            <Text style={{ color: 'black' }}> Buy </Text>
                        </TouchableOpacity>



                    </View>
                    <Card.Divider color='#ffff' />
                    <Text>{item.description} </Text>


                </Card>} />

        </SafeAreaView >
    )
}
