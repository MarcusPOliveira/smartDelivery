import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
import Principal from './components/main/Principal';
import MeuEndereco from './components/main/MeuEndereco';
import Pedidos from './components/main/Pedidos';
import BottomNavigation from './components/main/BottomNavigation';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#FFF' }}>
        <Stack key='root'>
            <Scene key='login' component={Login} title='Login' hideNavBar={ true }/>
            <Scene key='cadastro' component={Cadastro} title='Cadastro' hideNavBar={ true }/>
            <Scene key='principal' component={Principal} title='Principal' hideNavBar={ true } />
            <Scene key='meuEndereco' component={MeuEndereco} title='MeuEndereco' hideNavBar={ true }/>
            <Scene key='pedidos' component={Pedidos} title='Pedidos' hideNavBar={ true }/>
            <Scene key='bottomNavigation' component={BottomNavigation} title='BottomNavigation' hideNavBar={ true } initial/>
        </Stack>
    </Router>
);
