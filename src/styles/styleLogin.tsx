
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#1E90FF',
    
    },
    Title: {
        marginTop: 20,
        marginBottom: 75,
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
        fontWeight:'bold'
        
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

    },
    textAccount: {
        marginTop: 20,
        marginBottom: 20,
        color: '#c3d4e4',
        marginRight: 60,
        alignSelf:'flex-end'

    },
    
    ImgPkeball: {
        height: 25,
        width: 25,

    },
    imgs1:{
        height: 100,
        width: 100,
        marginTop: 80

    },

   
})

export default styles