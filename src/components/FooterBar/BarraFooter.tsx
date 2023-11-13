import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

export default function BarraFooter() {
    return (
        <View style={styles.container}>

            <View style={styles.containerCont}>
                <FontAwesome name="user" size={30} style={styles.icons} />
                <MaterialCommunityIcons name="pokeball" size={30} style={styles.icons} />
                <Ionicons name="cart-sharp" size={30} style={styles.icons} />
            </View>

        </View>
    )
}