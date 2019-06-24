import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';

import { Actions } from 'react-native-router-flux';

import agua from '../../imgs/icons/water20L.png';
import gas from '../../imgs/icons/gas.png';
import limpeza from '../../imgs/icons/limpeza.png';

export default class Categorias extends Component {
    state = {
        data: [
          { id: "agua", name: "Água Mineral 20L", image: agua },
          { id: "gas", name: "Gás de Cozinha", image: gas },
          { id: "limpeza", name: "Produtos de limpeza", image: limpeza },
        ]
      };

    render() {
      return (
            <SafeAreaView style={styles.container}>
              <FlatList
                data={this.state.data}
                keyExtractor={item => item.id}
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity style={styles.vwItem} onPress={() => Actions.agendar()} >
                            <Image source={item.image} style={styles.img} />
                            <Text style={styles.nomeProduto}> { item.name } </Text>
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
    vwItem: {
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
        width: 100,
        height: 100
    },
    txtInfo: {
        alignItems: 'center',
        marginLeft: 15
    },
    nomeProduto: {
        fontSize: 20,
        color: '#000'
    }
})
