import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import {useNavigation} from '@react-navigation/native'

const agendadas = [
    {
        nome_produto: 'Habib’s Tamboré, Barueri',
        valor_produto: '90,00',
        img_logo: require('../Favoritos/logohab.png'),
        descricao: 'Domingo, 31/12/23 ás 13:30'

    }, {
        nome_produto: 'Outback Steakhouse, Osasco',
        valor_produto: '90,00',
        img_logo: require('../Favoritos/logo-outback.jpg'),
        descricao: 'Domingo, 31/11/23 ás 13:30'
    }
];

const resAgenda = ({item}) => {
    return (
        <View style={styles.btnLogo}>
            <TouchableOpacity onPress={() => { }}>
                {/* IMAGEM LOGO */}
                <Image
                    style={styles.image}
                    source={item.img_logo}
                /> 
            </TouchableOpacity>

                    {/* DESCRIÇÃO DO FAVORITADO */}
                <View style={styles.viewDescription}>
                    <Text style={styles.descriptionTxt}>
                        {item.nome_produto}
                    </Text>

                    {/* SUB DESCRIÇÃO */}
                    <Text style={styles.subDescripition}>
                        {item.descricao}
                    </Text>
                </View>
        </View>
    );
}

const onde_esteve = [
    {
        nome_produto: 'Manai Gastronomia',
        valor_produto: '90,00',
        img_logo: require('../Favoritos/logoManai.jpeg'),
        descricao: 'Terça, 15/08/23 ás 18:30'

    }, {
        nome_produto: 'Habib’s Tamboré, Barueri',
        valor_produto: '90,00',
        img_logo: require('../Favoritos/logohab.png'),
        descricao: 'Segunda, 30/10/23 ás 18:30'
    }
];

const anteriores = ({item}) => {
    return (
        <View style={styles.btnLogo}>
            <TouchableOpacity onPress={() => { }}>
                {/* IMAGEM LOGO */}
                <Image
                    style={styles.image}
                    source={item.img_logo}
                /> 
            </TouchableOpacity>

                {/* DESCRIÇÃO DO FAVORITADO */}
            <View style={styles.viewDescription}>
                <Text style={styles.descriptionTxt}>
                    {item.nome_produto}
                </Text>

                {/* SUB DESCRIÇÃO */}
                <Text style={styles.subDescripition}>
                    {item.descricao}
                </Text>
            </View>
        </View>
    );

}
export default function Reservas() {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>

            <View style={styles.container}>
                <Text style={styles.txtFav}>Reservas</Text>
            </View>

            <SafeAreaView style={styles.container1}>
                <Text style={styles.txtAgenda}>Agendadas:</Text>
                <FlatList
                    data={agendadas}
                    renderItem={resAgenda}
                    ListEmptyComponent={<Text> A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={agendadas => agendadas.codigo_produto}/>

                <Text style={styles.txtAgenda}>Onde já esteve:</Text>
                <FlatList
                    data={onde_esteve}
                    renderItem={anteriores}
                    ListEmptyComponent={<Text> A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={onde_esteve => onde_esteve.codigo_produto}/>
            </SafeAreaView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // STYLE resAgenda E anteriores
    btnLogo: {
        margin: 20,
        borderBottomWidth: 0.5,
        paddingBottom: 20,
        borderColor: '#a2a2a2',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60, 
        borderRadius: 100,
        borderWidth: 2.5,
        borderColor: '#FE0000'
    },
    viewDescription: {
        flexDirection: 'column'
    },
    descriptionTxt: {
        paddingLeft: 10,
        fontSize: 18,
        lineHeight: 26,
        color: '#fff'
    },
    subDescripition: {
        fontSize: 15,
        color: '#9d9595',
        paddingLeft: 10
    },
    //FINAL STYLE

    //STYLE Reservas
    container: {
        backgroundColor: '#141414',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtFav: {
        color: '#fff',
        fontSize: 40
    },
    container1: {
        flex: 1,
        backgroundColor: '#141414'
    },
    txtAgenda: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 25
    },
});
