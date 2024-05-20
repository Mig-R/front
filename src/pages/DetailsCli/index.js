import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../HomeCli/outback.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <Text style={styles.title}>Outback SteakHouse {"\n"}Churrascaria</Text>
                    <Text style={styles.title}>Sobre</Text>
                    <Text style={styles.subTitle}>
                        A especialidade da casa é a carne, como a costela ao molho barbecue, uma das mais pedidas.
                    </Text>
                    <Text style={styles.title}>Temos</Text>
                    <View style={styles.iconsContainerList}>
                        <View style={styles.iconsContainer}>
                            <AntDesign name="wifi" style={styles.iconsStyle} />
                            <Text style={styles.subTitle}>WI-FI</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            <AntDesign name="car" style={styles.iconsStyle} />
                            <Text style={styles.subTitle}>Estacionamento</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            <FontAwesome name="thermometer-4" style={styles.iconsStyle} />
                            <Text style={styles.subTitle}>Ar-Condicionado</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            <Feather name="sun" style={styles.iconsStyle} />
                            <Text style={styles.subTitle}>Área ao ar livre</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Horário de Funcionamento</Text>
                    <View style={styles.horarioContainer}>
                        <Text style={styles.horarioText}>Segunda a Sexta:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }} />
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>8:00</Text>
                            </View>
                            <Text style={styles.horarioText}>à</Text>
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>22:00</Text>
                            </View>
                        </View>
                    </View>
                    <AntDesign style={styles.heartContainer} name="hearto" />
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#000',
    },
    containerLogo: {
        flex: 0.4,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#141414',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 3,
        borderColor: '#fff',
        paddingEnd: '5%',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        paddingStart: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    subTitle: {
        color: '#fff',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginTop: 15,
        paddingStart: '5%',
    },
    text: {
        color: '#fff',
        paddingStart: '5%',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    button1: {
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: 50,
        paddingVertical: 8,
        width: '40%',
        alignSelf: 'flex-start',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: '5%',
    },
    button2: {
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: 50,
        paddingVertical: 8,
        width: '40%',
        alignSelf: 'flex-end',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: '5%',
        marginStart: '5%',
    },
    buttonText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    btnFix: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    heartContainer: {
        position: 'absolute',
        top: 30,
        right: 20,
        fontSize: 30,
        color: '#fff',
    },
    iconsContainerList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: '5%',
        paddingEnd: '5%',
        flexWrap: 'wrap',
        marginTop: '5%',
    },
    iconsStyle: {
        fontSize: 38,
        color: '#fff',
    },
    iconsContainer: {
        alignItems: 'center',
        width: '45%',
        marginBottom: '5%',
    },
    horarioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: 15,
    },
    horarioTextContainer: {
        width: '55%',
        alignItems: 'flex-start',
    },
    horario: {
        width: '35%',
        height: '30%',
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: '#fff',
        backgroundColor: '#423B3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    horarioStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    horarioText: {
        color: '#fff',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
});