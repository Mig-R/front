import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Perfil(){
    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.text}>bah</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }

});