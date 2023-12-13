import React, { Fragment, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import {
    Platform,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Balloon from '../components/Balloon/Balloon';
import styles from '../styles/styleChat';
import storageService from '../service/storageService';



const socket = io('http://10.5.1.171:3000')


const Chat = () => {

    const [userData, setUserData] = useState({ name: '' })
    const options: any = { messages: [] }
    const [chat, setChat] = useState(options)
    const [content, setContent] = useState('')

    useEffect(() => {
        socket.on('connect', () => {
            console.log("Web Socket CONNECTED " + socket.connected)
            console.log(socket.id)
        })
        socket.on("diconnect", () => {
            console.log(socket.connected)
        })
        storageService.get('userData').then((userData) => {
            console.log('USERDATA ' + userData)
            socket.on('chat', (messagem) => {
                chat.messages.push(messagem)
                setChat({ messages: chat.messages })
                setContent('')

            })
            setUserData(userData)
        })
    }, [])


    const sendMessage = () => {
        socket.emit('chat', { content, sentBy: userData.name, date: new Date() })
    }



    return (
        <Fragment>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                {chat.messages.length > 0 ?
                    chat.messages.map((m: any, index: number) => (
                        <Balloon key={index} message={m} currentUser={userData.name} />
                    )) : <Text style={{ alignSelf: 'center', color: '#848484' }}> Sem mensagens no momento</Text>
                }
            </ScrollView>
            <SafeAreaView>
                <View style={styles.messageTextInputContainer}>
                    <TextInput
                        style={styles.messageTextInput}
                        placeholder="Digite sua mensagem..."
                        placeholderTextColor={Colors.light}
                        multiline
                        value={content}
                        onChangeText={(message) => setContent(message)}
                    />
                    <TouchableOpacity
                        style={styles.sendButton}
                        disabled={!content}
                        onPress={() => sendMessage()}>
                        <Text>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        </Fragment >
    );
};

export default Chat;