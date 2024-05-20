import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { FontAwesome  } from '@expo/vector-icons';


import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

const agendadas = [
    {
        nome_produto: 'Habib’s Tamboré, Barueri',
        valor_produto: '90,00',
        imagem_livro:require('../Favoritos/logohab.png'),
        descricao_produto: 'Domingo, 31/12/23 ás 13:30'

    },
    {
        nome_produto: 'Outback Steakhouse, Osasco',
        valor_produto: '90,00',
        imagem_livro:require('../Favoritos/logo-outback.jpg'),
        descricao_produto: 'Domingo, 31/11/23 ás 13:30'
    },
    
];

const resAgenda = ({ item }) => {
    return (
        <View style={styles.container2}>
        <TouchableOpacity style={styles.btn} onPress={() => { }}>
            {/* Image  */}
            <Image
                style={styles.image}
                source={item.imagem_livro}
            />
        <View style={styles.viewDescription}>
        {/* Bed & Bedroom  */}
        <Text style={styles.description}>
            {item.nome_produto}
        </Text>
        
        {/* Type & Description */}
        <Text style={styles.txtDescProd}>
            {item.descricao_produto}
        </Text>
        </View>
        </TouchableOpacity>
        {/*  Old price & new price */}
    </View>
    );

}



const onde_esteve = [
    {
        nome_produto: 'Manai Gastronomia',
        valor_produto: '90,00',
        imagem_livro:require('../Favoritos/logoManai.jpeg'),
        descricao_produto: 'Terça, 15/08/23 ás 18:30'

    },
    {
        nome_produto: 'Habib’s Tamboré, Barueri',
        valor_produto: '90,00',
        imagem_livro:require('../Favoritos/logohab.png'),
        descricao_produto: 'Segunda, 30/10/23 ás 18:30'
    },
    
];

const anteriores = ({ item }) => {
    return (
        <View style={styles.container2}>
        <TouchableOpacity style={styles.btn} onPress={() => { }}>
            {/* Image  */}
            <Image
                style={styles.image}
                source={item.imagem_livro}
            />
        <View style={styles.viewDescription}>
        {/* Bed & Bedroom  */}
        <Text style={styles.description}>
            {item.nome_produto}
        </Text>
        
        {/* Type & Description */}
        <Text style={styles.txtDescProd}>
            {item.descricao_produto}
        </Text>
        </View>
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
                    <Text style={styles.txtFav}>Reservas</Text>

            </View>

            <SafeAreaView style={styles.container1}>
                <Text style={styles.txtAgenda}>Agendadas:</Text>
                <FlatList
                    data={agendadas}
                    renderItem={resAgenda}
                    ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={agendadas => agendadas.codigo_produto}
                />

                <Text style={styles.txtAgenda}>Onde já esteve:</Text>
                <FlatList
                    data={onde_esteve}
                    renderItem={anteriores}
                    ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={onde_esteve => onde_esteve.codigo_produto}
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
    txtAgenda:{
        color: '#fff',
        fontSize: 20,
        paddingLeft: 25
    },
    txtFav:{
        color:'#fff',
        fontSize: 40
    },
    container1: {
        flex: 1,
        backgroundColor: '#141414',        
    },
    viewDescription:{
        flexDirection:'column'
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
        alignItems: 'center',
        
    },
    image: {
        width: 60,
        height: 60, // ajuste conforme necessário
        borderRadius: 100,
        borderWidth:2.5,
        borderColor:'#FE0000',
        
    },
    txtDescProd:{
        fontSize: 15,
        color: '#9d9595',
        paddingLeft: 10
    },

    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        paddingLeft: 10,
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
