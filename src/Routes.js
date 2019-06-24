import React, { Component } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
import Principal from './components/main/Principal';
import MeuEndereco from './components/main/MeuEndereco';
import Pedidos from './components/main/Pedidos';
import CadastrarEndereco from './components/cadastro/CadastrarEndereco';
import Opcao from './components/main/Opcao';
import Categorias from './components/main/Categorias';
import Agendar from './components/main/Agendar';
import Carrinho from './components/main/Carrinho';

class TabIcon extends Component {
    render() {
        var color = this.props.selected ? '#00f240' : '#301c2a';
      return (
        <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
          <Icon style={{color: color}} name={this.props.iconName || "circle"} size={25}/>
        </View>
      );
    }
  }

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#5B37D1'}} titleStyle={{ color: '#FFF', fontSize: 18}}>
        <Stack key='root'>
            <Scene key='login' component={Login} title='Login' hideNavBar={ true } />
            <Scene key='cadastro' component={Cadastro} title='Cadastro' hideNavBar={ true }/>
            <Scene key='cadastrarEndereco' component={CadastrarEndereco} title='Cadastrar Endereço' hideNavBar={ true }/>
            <Scene key='tabbar' tabs tabBarStyle={{ backgroundColor: '#FFF' }} hideNavBar={ true } >
                <Scene key='meuEndereco' component={MeuEndereco} title='Meu Endereco' hideNavBar={ true } iconName='map-marker' icon={TabIcon}/>
                <Scene key='principal' component={Principal} title='Menu' hideNavBar={ true } iconName='home' icon={TabIcon} />
                <Scene key='pedidos' component={Pedidos} title='Pedidos' hideNavBar={ true } iconName='shopping-cart' icon={TabIcon}/>
            </Scene>
            <Scene key='opcao' component={Opcao} title='Selecione uma opção' hideNavBar={ false } back={true} backButtonTintColor='#FFF' />
            <Scene key='categorias' component={Categorias} title='Selecione uma categoria' hideNavBar={ false } back={true} backButtonTintColor='#FFF'/>
            <Scene key='agendar' component={Agendar} title='Data e horário de entrega' hideNavBar={ false } back={true} backButtonTintColor='#FFF'/>
            <Scene key='carrinho' component={Carrinho} title='Carrinho' hideNavBar={ false } back={true} backButtonTintColor='#FFF'/>
        </Stack>
    </Router>
);
