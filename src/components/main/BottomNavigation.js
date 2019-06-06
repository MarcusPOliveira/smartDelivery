import React, { Component } from 'react';
import { View } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator  } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Principal from './Principal';
import MeuEndereco from './MeuEndereco';
import Pedidos from './Pedidos';

const MenuRoutes = {
    Principal: {
        name: 'Principal',
        screen: Principal,
        navigationOptions: {
            title: 'Principal',
            tabBarIcon: ({ tintColor }) => 
                <Icon name='home' size={24} color={tintColor} />            
        }
    },
    MeuEndereco: {
        name: 'MeuEndereco',
        screen: MeuEndereco,
        navigationOptions: {
            title: 'Meu Endereço',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='map-marker' color={tintColor} size={24} />
        }
    },
    Pedidos: {
        name: 'Pedidos',
        screen: Pedidos,
        navigationOptions: {
            title: 'Pedidos',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='shopping-cart' color={tintColor} size={24} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Principal',
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);
export default MenuNavigator;


/*
const TabNavigator = createMaterialBottomTabNavigator( //Routes e MaterialBottomTabNavigatorConfig
    {
        Principal: { screen: Principal,
            navigationOptions: {
                tabBarLabel: 'Principal',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon name='home' color={tintColor} size={24} />
                    </View>
                )
            }
        },
        MeuEndereco: { screen: MeuEndereco,
            navigationOptions: {
                tabBarLabel: 'MeuEndereco',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon name='map-marker' color={tintColor} size={24} />
                    </View>
                )
            }
        },
        Pedidos: { screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'Pedidos',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon name='shopping-cart' color={tintColor} size={24} />
                    </View>
                )
            }
        }
    },
    {
        initialRouteName: 'Principal',
        order: ['MeuEndereco', 'Principal', 'Pedidos'],
        activeTintColor: '#000',
    }
)

export default createAppContainer(TabNavigator);
*/