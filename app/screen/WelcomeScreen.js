import React from 'react'
import { ImageBackground, Image, StyleSheet, Text, View, _Text } from 'react-native'
import AppButoon from '../components/AppButton'

export default function WelcomeScreen() {
    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.logocontainer}>
                <Image style={styles.logo} source={require("../assets/icon.png")}></Image>
                <Text style={styles.tagline}>Bech De</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButoon title="Login" color="orange" />
                <AppButoon title="Register" color="blue" />
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    tagline: {
        fontSize:20,
        fontWeight: "600",
        paddingVertical: 10,
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 30,
        backgroundColor: 'skyblue',
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logocontainer: {
        position: 'absolute',
        top:70,
        alignItems: 'center'
    }
})
