import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {

    },
    containerBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 15,
        // backgroundColor: 'white',
        marginLeft: 18,
        marginRight: 18,
        borderRadius: 10
    },
    conteudoText: {
        color: "white",
        fontSize: 16,
        marginRight: 7

    },
    imgPkball: {
        height: 35,
        width: 35,
        alignSelf: 'center',
    },
    img: {
        height: 100,
        width: 200,
        alignSelf: 'center',
    },
    containerImg:{
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
    }




})


export default styles