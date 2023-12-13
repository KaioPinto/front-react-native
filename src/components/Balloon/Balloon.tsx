import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styleBalloon';


const Balloon = ({ message, currentUser }: any) => {
    const sent = currentUser === message.sentBy;
    const balloonColor = sent ? styles.balloonSent : styles.balloonReceived;
    const balloonTextColor = sent
        ? styles.balloonTextSent
        : styles.balloonTextReceived;
    const bubbleWrapper = sent
        ? styles.bubbleWrapperSent
        : styles.bubbleWrapperReceived;
    if (message) {
        return (
            <View style={{ marginBottom: '2%' }}>
                <View style={{ ...styles.bubbleWrapper, ...bubbleWrapper }}>
                    <View style={{ ...styles.balloon, ...balloonColor }}>
                        <Text>
                            {message.sentBy}
                        </Text>
                        <Text style={{ ...styles.balloonText, ...balloonTextColor }}>
                            {message.content}
                        </Text>
                    </View>
                </View>
            </View>
        )
    } else {
        return <></>
    }
}

export default Balloon