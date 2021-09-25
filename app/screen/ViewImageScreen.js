import React from 'react'
import { Image,StyleSheet,View } from 'react-native'

function ViewImageScreen(props) {
    return(
        <View style={styles.container}>
         <View style={styles.openicon}></View>
         <View style={styles.closeicon}></View>
         <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
    openicon: {
        width: 50,
        height: 50,
        backgroundColor: 'orange',
        position: 'absolute',
        top:20,
        right: 30,
        borderWidth: 10,
        borderColor:'darkorange',
        borderRadius: 10,
        shadowColor:'grey',
    },
    closeicon: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        position: 'absolute',
        top: 20,
        left: 30,
        borderWidth: 10,
        borderColor:'royalblue',
        borderRadius: 10,
    },
    container: {
        backgroundColor: "black",
        display: 'flex',
    },
    image: {
        width: '100%',
        height: '100%',
    },
})
export default ViewImageScreen;