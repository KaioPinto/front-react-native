import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E90FF',
    },

    conteudoImg: {
        height: 50,
        width: 50,
    },
    cardStyle: {
        backgroundColor: '#87CEFA', borderRadius: 15, shadowColor: 'DodgerBlue', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8,

    },
    titleCardStyle: {
        color: 'white', fontSize: 16, fontWeight: 'bold', shadowColor: 'LightSkyBlue', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8,
    },
    textCard: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'normal',
        marginBottom: 8.
    },
    button: {
        borderRadius: 4,
        backgroundColor: '#ffff',
        shadowColor: 'LightSkyBlue',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        marginLeft: 80,
        marginBottom: 10,
        width: 70,
        alignItems: 'center'
    },
    styleView: {
        flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start'
    },
    fab:{
        position: 'absolute',
        right: 30,
        bottom: 30

    }

})


export default styles