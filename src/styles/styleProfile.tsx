import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E90FF',
        alignItems: 'center',
    },
    img: {
        height: 100,
        width: 200,
        alignSelf: 'center',
    },
    containerCont: {
        marginTop: 100,
        height: 400,
        width: 300,
        padding: 20,
        alignItems: 'center',
    },
    conteudoText: {
        fontSize: 20,
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        color: 'darkgray',
    },
    bloco: {
        backgroundColor: '#D3D3D3',
        width: 300,
        borderRadius: 15,
        paddingLeft: 10,
        marginBottom: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d30203',
        marginTop: 20,
        borderRadius: 8,
        width: '40%',
        height: 40,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    texto: {
        color: '#ffff',
        fontSize: 15
    }
})

export default styles