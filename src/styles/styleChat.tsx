import { StyleSheet } from "react-native"
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginHorizontal: 16,
    },
    scrollViewContainer: {
        marginTop: 30,
        paddingHorizontal: 10,
        paddingVertical: 10,
        top: 10,
    },
    sendButton: {
        backgroundColor: Colors.primary,
        color: Colors.white,
        height: 40,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 5,
    },
    messageTextInputContainer: {
        justifyContent: 'flex-end',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderColor: 'transparent',
        borderTopColor: Colors.light,
        alignItems: 'center',
        flexDirection: 'row',
    },
    messageTextInput: {
        flex: 1,
        minHeight: 40,
        maxHeight: 90,
        paddingHorizontal: 12,
        fontSize: 17,
        paddingTop: 8,
        marginHorizontal: 5,
        borderColor: Colors.light,
        borderWidth: 1,
        backgroundColor: Colors.white,
        borderRadius: 20,
    },
});
export default styles