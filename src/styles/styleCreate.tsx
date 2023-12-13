import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        height: "100%",
        width: 'auto'

    },

    Title: {
        marginTop: 20,
        marginBottom: 50,
        color: '#ffff',
        fontSize: 27,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    textLogin: {
        alignSelf: 'flex-start',
        marginLeft: 30,
        fontSize: 20,
        marginBottom: 30,
        color: '#c3d4e4',
    },
    input: {
        borderRadius: 8,
        backgroundColor: '#ffff',
        width: '80%',
        height: 40,
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 30


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
        alignSelf:'center'

    },
    text: {
        alignSelf: 'flex-start',
        color: '#c3d4e4',
        marginLeft: 30,
        marginBottom: 10
    },
    textBack: {
        marginTop: 20,
        color: '#c3d4e4',
        alignSelf:'center'

    },
    ImgPkeball: {
        height: 25,
        width: 25,

    },
    imgs1: {
        height: 100,
        width: 100,
        marginTop: 80

    },


})

export default styles