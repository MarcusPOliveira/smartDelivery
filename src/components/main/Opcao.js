import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import img1 from '../../imgs/icons/calendar.png';
import img2 from '../../imgs/icons/cart.png';
import img3 from '../../imgs/icons/cesta.png';

export default class Opcao extends Component {
    state={
        data: [
            { id: 'agendar', name: 'Agendar pedido', image: img1 },
            { id: 'realizar', name: 'Realizar pedido', image: img2 },
            { id: 'cesta', name: 'Cesta rápida', image: img3 }
        ]
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={ ({ item }) => {
                        return (
                            <TouchableOpacity style={styles.vwOpc} onPress={() => Actions.categorias()} >
                                <Image source={item.image} style={styles.img} />
                                <Text style={styles.nomeOpc}> { item.name } </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
     vwOpc: {
        backgroundColor: '#FFF',
		height: 250,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#F0F0F9',
        borderWidth: 1,
        justifyContent: 'center',
        flexGrow: 1,
        margin: 4,
        padding: 20
     },
     img: {
        width: 110,
        height: 110
     },
     nomeOpc: {
         fontSize: 20,
         color: '#000'
     }
});
