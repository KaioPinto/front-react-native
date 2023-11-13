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
    imgPqn: {
        height: 50,
        width: 50,
    },


})

export default styles