// Principal - Parceiros
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

import img1 from '../../imgs/photos/logoPereiraPango.png';
import img2 from '../../imgs/photos/chapadao.png';
import img3 from '../../imgs/photos/logoBh.png';

export default class Principal extends Component {
    render() {
        return (
            <View style={styles.main}>
              <View style={styles.header}>
                <View style={styles.profilePicture}></View>
                <View style={styles.vwTitle}>
                  <Text style={styles.title}>Parceiros</Text>
                </View>
              </View>
              <View style={styles.container}>
              <TouchableOpacity style={styles.vwParceiro1} onPress={() => Actions.opcao()}>
                  <Image source={img1} style={styles.imgParceiro}/>
                  <View style={styles.txtParceiros}>
                    <Text style={styles.nomeParceiro}>Supermercado Pereira Pango</Text>
                    <Text style={styles.enderecoParceiro}>Rua Coronel Maneca, 103, Pains - MG</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.vwParceiro}>
                  <Image source={img2} style={styles.imgParceiro}/>
                  <View style={styles.txtParceiros}>
                    <Text style={styles.nomeParceiro}>Chapadão Supermercado</Text> 
                    <Text style={styles.enderecoParceiro}>Av. Abílio Machado, 198, Formiga - MG</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.vwParceiro}>
                  <Image source={img3} style={styles.imgParceiro}/>
                  <View style={styles.txtParceiros}>
                    <Text style={styles.nomeParceiro}>Supermercados BH</Text> 
                    <Text style={styles.enderecoParceiro}>Av. Abílio Machado, 1120, Formiga - MG</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  main: {
    flex: 5,
    flexDirection: 'column',
  },
  header: {
    //add ImageBackground
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    height: 60,
    flex: 0.5,
  },
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: '#FFF',
    margin: 10,
    borderColor: '#FFF'
  },
  vwTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 150
  },
  title: {
    color: '#000',
    fontSize: 18,
  },
  container: {
    backgroundColor: '#FFF',
    height: 190,
    flex: 4,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  vwParceiro1: {
    backgroundColor: '#FFF',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#F0F0F9',
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    
  },
  imgParceiro: {
    width: 100,
    height: 100
  },
  txtParceiros: {
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 15
  },
  vwParceiro: {
    backgroundColor: '#FFF',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#F0F0F9',
    borderWidth: 1,
  }
});

