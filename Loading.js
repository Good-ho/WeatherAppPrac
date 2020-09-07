import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Loading() {
    return (<View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>        
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        padding:20,
        backgroundColor:"#FDF6AA"
    },

    text:{
        color:"#2c2c2c",
        fontSize:20
    }
})