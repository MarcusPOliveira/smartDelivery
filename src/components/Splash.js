/* 

--> Curso Cod3r, falta exportar e definir imagem <--

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Splash extends Component {
  
    componentDidMount = () => {
        setTimeout(
            () => { this.props.navigation.navigate('App') },
            2000
        )
    }
  
    render() {
    return (
        <View style={styles.container}>
            <Image source={require('../imgs/splash.png')} style={styles.image} />
            <Text style={styles.txtNome}>Nome do app</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    txtNome: {
        fontSize: 50,
        fontWeight: 'bold'
    }
});
*/