import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { FontAwesome  } from '@expo/vector-icons';


import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

const prod = [
    {
        codigo_produto: 1,
        codigo_categoria: 1,
        nome_produto: 'Habib’s Tamboré, Barueri       ',
        valor_produto: '90,00',
        imagem_livro:require('../Favoritos/logohab.png'),
        descricao_produto: ''
    },
    {
        codigo_produto: 2,
        codigo_categoria: 1,
        nome_produto: 'Outback Steakhouse, Osasco',
        valor_produto: '90,00',
        imagem_livro:require('../Favoritos/logo-outback.jpg'),
        descricao_produto: ''
    },
    
];

const prodItem = ({ item }) => {
    return (
        <View style={styles.container2}>
        <TouchableOpacity style={styles.btn} onPress={() => { }}>
            {/* Image  */}
            <Image
                style={styles.image}
                source={item.imagem_livro}
            />

        {/* Bed & Bedroom  */}
        <Text style={styles.description}>
            {item.nome_produto}
        </Text>

    

        <FontAwesome  name='heart' color='#fe0000' size={25}/>

        </TouchableOpacity>
        {/*  Old price & new price */}
    </View>
    );

}
export default function Favoritos() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <View style={styles.container}>
                    <Text style={styles.txtFav}>Favoritos</Text>

            </View>

            <SafeAreaView style={styles.container1}>
                <FlatList
                    data={prod}
                    renderItem={prodItem}
                    ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={prod => prod.codigo_produto}
                />

            </SafeAreaView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141414',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtFav:{
        color:'#fff',
        fontSize: 40
    },
    container1: {
        flex: 1,
        backgroundColor: '#141414'
    },
    container2: {
        margin: 20,
        borderBottomWidth:0.5,
        paddingBottom:20,
        borderColor:'#a2a2a2',
        borderRadius: 10
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
        paddingTop: 10
    },

    btn:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60, // ajuste conforme necessário
        borderRadius: 100,
        borderWidth:2.5,
        borderColor:'#FE0000',
        
    },

    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        paddingLeft:10,
        paddingRight: 10,
        fontSize: 18,
        lineHeight: 26,
        color: '#fff'
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    }
});
