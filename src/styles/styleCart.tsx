import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E90FF",
    },
    conteudoImg: {
        height: 100,
        width: 200,
    },
    campoImg: {
        alignItems: 'center',
    },
    campoCont: {
        marginTop: 200,
        alignItems: "center"
    },
    conText: {
        fontSize: 20,
        marginTop: 20
    },
    icon: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,

    }

    , cardStyle: {
        backgroundColor: '#87CEFA', borderRadius: 15, shadowColor: 'DodgerBlue', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, alignContent: 'flex-start'

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
    imgPqn: {
        height: 50,
        width: 50,
    },
    buttonFinalizar: {
        borderRadius: 8,
        width: '40%',
        height: 35,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        backgroundColor: '#d30203',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 232,
        marginTop: 13
    },
    contText: {
        color: 'white',
        fontSize: 13,
        fontStyle: 'normal'
    },
    styleView: {

        flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start'

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

})

export default styles