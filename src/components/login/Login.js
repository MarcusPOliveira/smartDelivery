import React, { Component } from 'react';
import { View, ImageBackground, Text, TextInput, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../../actions/AuthActions';

import bg from '../../imgs/drawable-hdpi/bg.png';

class Login extends Component {
  
    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
    }

    renderbtnLogin() {
        if (this.props.loading_login) {
            return (
                <ActivityIndicator size='large' color='#FFF' />
            )
        } else {
            return (
                <TouchableOpacity onPress={() => this._autenticarUsuario()} >
                    <Text style={styles.txtLogin}>Login</Text>
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
                    <Text style={styles.txtTitle}>Entrar</Text>
                    <View style={styles.vw1}>
                        <Image style={styles.icon} source={require('../../imgs/icons/email.png')}/>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
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
                            placeholder="Digite sua senha"
                            secureTextEntry={true}
                            onChangeText={(texto) => this.props.modificaSenha(texto)}
                            value={this.props.senha}
                        />
                    </View>
                    <Text style={{color: '#ff0000', fontSize: 12}}>
                        { this.props.erroLogin }
                    </Text>
                    <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>
                    <View style={styles.btnEntrar}>
                        {
                            this.renderbtnLogin()
                        }
                    </View>
                    <View style={styles.vwBarras}>
                        <View style={styles.barra}></View>
                        <Text style={styles.txtOu}>OU</Text>
                        <View style={styles.barra}></View>
                    </View>
                    <View style={styles.vwEntrarGoogle}>
                        <TouchableOpacity style={styles.btnEntrarGoogle}>
                            <Image style={styles.iconGoogle} source={require('../../imgs/icons/google.png')}/>
                            <Text style={styles.txtEntrarGoogle}>Entrar com Google</Text>
                        </TouchableOpacity>
                    </View>
                    </KeyboardAvoidingView>
                    <View style={styles.vwtxtFinal}>
                        <Text style={{fontSize: 18}}>Ainda não tem uma conta?</Text>
                        <TouchableOpacity onPress={() => Actions.cadastro()}>
                            <Text style={styles.txtCadastrar}> Cadastre-se! </Text>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        )
    }
}

//estabelecer "transferencia de dados" de state do Redux para props
const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha,
        erroLogin: state.AuthReducer.erroLogin,
        loading_login: state.AuthReducer.loading_login
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(Login);

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
        height: 500,
        width: 300,
        marginTop: 20,
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
        fontSize: 23
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
    input: {
        height: 45,
        width: 250,
        flex: 1,        
        borderColor: '#AAA7A7',
        textAlign: 'center',
        marginRight: 32,
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
    esqueceuSenha: {
        color: '#000',
        marginTop: 10
    },
    btnEntrar: {
        backgroundColor: '#5B37D1',
        padding: 10,
        marginTop: 30,
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
    txtLogin: {
        color: '#FFF',
        fontSize: 18
    },
    vwBarras: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    barra: {
        backgroundColor: '#A9A9A9',
        width: 100,
        height: 2
    },
    txtOu: {
        fontSize: 12,
        padding: 10
    },
    btnEntrarGoogle: {
        backgroundColor: '#FFF',
        width: 280,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        borderRadius: 8,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        marginTop: 30
    },
    txtEntrarGoogle: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        marginRight: 50,
        fontSize: 15
    },
    vwEntrarGoogle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 280,
        height: 45,
        borderRadius: 8,
        marginTop: 20,
    },
    iconGoogle: {
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        marginRight: 38
    },
    vwtxtFinal: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtCadastrar: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
