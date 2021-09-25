import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export default function AppButoon({title,onPress, color= 'orange'}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: "white",
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})