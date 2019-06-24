import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, StatusBar, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';

import { 
    modificaCep, 
    modificaLogradouro, 
    modificaNumero, 
    modificaBairro, 
    modificaComplemento, 
    cadastraEndereco, } from '../../actions/AuthActions';

import { connect } from 'react-redux';

import bg from '../../imgs/backgrounds/bg.png';

class CadastrarEndereco extends Component {

    _cadastraEndereco() {
        const { cep, logradouro, numero, bairro, complemento } = this.props;
        this.props.cadastraEndereco({ cep, logradouro, numero, bairro, complemento });
    }

    renderBtnContinuar() {
        if (this.props.loading_cadastro_endereco) {
            return (
                <ActivityIndicator size='large' color='#FFF' />
            )
        } else {
            return (
                <TouchableOpacity onPress={() => this._cadastraEndereco()}>
                    <Text style={styles.txtContinuar}>Continuar</Text>
                </TouchableOpacity>
            )
        }
    }

  render() {
    return (
        <ImageBackground style={styles.background} source={bg}>
            <StatusBar backgroundColor="#5B37D1" barStyle="light-content" />
            <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.select({
                        ios: 'padding',
                        android: 'padding',})}
            >
                <Text style={styles.txtTitle}>Cadastrar endereço</Text>
                <View style={styles.vw1}>
                    <TextInput
                        style={styles.input}
                        placeholder='CEP'
                        onChangeText={(texto) => this.props.modificaCep(texto)}
                        value={this.props.cep}
                        keyboardType='numeric'
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.vw1}>
                    <TextInput
                        style={styles.input}
                        placeholder='Logradouro'
                        onChangeText={(texto) => this.props.modificaLogradouro(texto)}
                        value={this.props.logradouro}
                    />
                </View>
                <View style={styles.vw1}>
                    <TextInput
                        style={styles.input}
                        placeholder='Número'
                        onChangeText={(texto) => this.props.modificaNumero(texto)}
                        value={this.props.numero}
                        autoCapitalize='none'
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.vw1}>
                    <TextInput
                        style={styles.input}
                        placeholder='Bairro'
                        onChangeText={(texto) => this.props.modificaBairro(texto)}
                        value={this.props.bairro}
                    />
                </View>
                <View style={styles.vw1}>
                    <TextInput
                        style={styles.input}
                        placeholder='Complemento'
                        onChangeText={(texto) => this.props.modificaComplemento(texto)}
                        value={this.props.complemento}
                    />
                </View>
                <View style={styles.btnContinuar}>
                    {
                        this.renderBtnContinuar()
                    }
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
  }
}

const mapStateToProps = state => (
    {
        cep: state.AuthReducer.cep,
        logradouro: state.AuthReducer.logradouro,
        numero: state.AuthReducer.numero,
        bairro: state.AuthReducer.bairro,
        complemento: state.AuthReducer.complemento,
        loading_cadastro_endereco: state.AuthReducer.loading_cadastro_endereco
    }
);

export default connect(mapStateToProps, {
    modificaCep, modificaLogradouro, modificaNumero, modificaBairro, modificaComplemento, cadastraEndereco
})(CadastrarEndereco);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        height: 510,
        width: 300,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txtTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        color: '#4C2666',
        fontSize: 25
    },
    vw1: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        margin: 10,
        marginTop: 20
    },
    input: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        width: 260,
        flex: 1,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#AAA7A7',
        textAlign: 'center',
    },
    btnContinuar: {
        backgroundColor: '#5B37D1',
        padding: 10,
        marginTop: 20,
        width: 280,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    txtContinuar: {
        color: '#FFF',
        fontSize: 20
    },
})
