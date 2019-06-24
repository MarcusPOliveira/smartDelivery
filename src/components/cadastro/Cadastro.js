import React, { Component } from 'react';
import { View, ImageBackground, Text, TextInput, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaNome, 
    modificaCpf, 
    modificaNumeroCelular, 
    modificaEmail, 
    modificaSenha, 
    cadastraUsuario, } from '../../actions/AuthActions';

import bg from '../../imgs/backgrounds/bg.png';

class Cadastro extends Component {
  
    _cadastraUsuario() { //function interna do componente
        const { nome, cpf, numeroCelular, email, senha } = this.props;
        this.props.cadastraUsuario({ nome, cpf, numeroCelular, email, senha });
    }

    renderBtnCadastrar() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size='large' color='#FFF' />
            )
        } else {
            return (
                <TouchableOpacity onPress={() => this._cadastraUsuario()}>
                    <Text style={styles.txtCadastrar}>Cadastrar</Text>
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
                        android: 'padding',
                    })}
                >
                    <Text style={styles.txtTitle}>Cadastrar</Text>
                    <View style={styles.vw1}>
                        <Image style={styles.icon} source={require('../../imgs/icons/nome.png')}/>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome completo"
                            onChangeText={(texto) => this.props.modificaNome(texto)}
                            value={this.props.nome}
                        />
                    </View>
                    <View style={styles.vw1}>
                        <Image style={styles.icon} source={require('../../imgs/icons/cpf.png')}/>
                        <TextInput
                            style={styles.input}
                            placeholder="CPF válido"
                            onChangeText={(texto) => this.props.modificaCpf(texto)}
                            value={this.props.cpf}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.vw1}>
                        <Image style={styles.icon} source={require('../../imgs/icons/celular.png')}/>
                        <TextInput
                            style={styles.input}
                            placeholder="Nº de celular"
                            onChangeText={(texto) => this.props.modificaNumeroCelular(texto)}
                            value={this.props.numeroCelular}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.vw1}>
                        <Image style={styles.icon} source={require('../../imgs/icons/email.png')}/>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite um email válido"
                            onChangeText={(texto) => this.props.modificaEmail(texto)}
                            value={this.props.email}
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.vw1}>
                        <Image style={styles.icon} source={require('../../imgs/icons/senha.png')}/>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite uma senha válida"
                            secureTextEntry={true}
                            onChangeText={(texto) => this.props.modificaSenha(texto)}
                            value={this.props.senha}
                        />
                    </View>
                    <Text style={{color: '#ff0000', fontSize: 12}}>
                        { this.props.erroCadastro }
                    </Text>
                    <View style={styles.btnCadastrar}>
                        {
                            this.renderBtnCadastrar()
                        }
                    </View>
                    <View style={styles.vwtxtFinal}>
                        <Text style={{fontSize: 18}}>Já tem uma conta?</Text>
                        <TouchableOpacity onPress={() => Actions.login()}>
                            <Text style={styles.txtLogin}> Login </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => (
    {
        nome: state.AuthReducer.nome,
        cpf: state.AuthReducer.cpf,
        numeroCelular: state.AuthReducer.numeroCelular,
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha,
        erroCadastro: state.AuthReducer.erroCadastro,
        loading_cadastro: state.AuthReducer.loading_cadastro
    }
);

export default connect(mapStateToProps, {
    modificaNome, modificaCpf, modificaNumeroCelular, modificaEmail, modificaSenha, cadastraUsuario
})(Cadastro);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        alignItems: 'center',
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#AAA7A7',
        height: 45,
        borderRadius: 8,
        margin: 10,
        marginTop: 20
    },
    icon: {
        padding: 10,
        margin: 5,
        height: 25,
        marginLeft: 10,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    input: {
        height: 45,
        width: 250,
        flex: 1,        
        borderColor: '#AAA7A7',
        textAlign: 'center',
        marginRight: 32,
    },
    btnCadastrar: {
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
    txtCadastrar: {
        color: '#FFF',
        fontSize: 20
    },
    vwtxtFinal: {
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtLogin: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
