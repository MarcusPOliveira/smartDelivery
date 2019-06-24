import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Picker } from 'react-native';
import moment from 'moment';
import DateTimePicker from "react-native-modal-datetime-picker";

import { Actions } from 'react-native-router-flux';

import clock from '../../imgs/icons/time.png';

export default class Agendar extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
            chosenDate: '',
        }
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format("DD/MM/YYYY")
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.vwImg}>
                    <Image source={clock} style={styles.img} />
                </View>
                <TouchableOpacity style={styles.mostrarPicker} onPress={this.showPicker}>
                    <Text style={styles.txtData}> Escolha uma data: </Text>
                    <Text style={styles.txtDataEscolhida}> {this.state.chosenDate} </Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                />
                <View style={styles.vwHorarios}>
                    <Text style={styles.txtData}> Escolha uma horário: </Text>
                    <Picker
                        selectedValue={this.state.horario}
                        style={styles.pickerTime}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({horario: itemValue})
                        }>
                        <Picker.Item label="8:00 às 11:00" value="manha" />
                        <Picker.Item label="11:00 às 14:00" value="almoco" />
                        <Picker.Item label="14:00 às 17:00" value="tarde" />
                        <Picker.Item label="17:00 às 19:30" value="noite" />
                    </Picker>
                </View>
                <View style={styles.vwImg}>
                    <TouchableOpacity style={styles.btnConfirmar} onPress={() => Actions.carrinho()}>
                        <Text style={styles.txtConfirmar} >Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    mostrarPicker: {
        height: 100,
        justifyContent: 'center',
        marginTop: 25,
        borderColor: '#F0F0F0',
        borderWidth: 1,
        alignItems: 'center'
    },
    txtData: {
        fontSize: 18,
        color: '#000'
    },
    txtDataEscolhida: {
        fontSize: 20,
        color: '#000'
    },
    vwImg: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    img: {
        width: 100,
        height: 100,
    },
    vwHorarios: {
        height: 100,
        justifyContent: 'center',
        borderColor: '#F0F0F0',
        borderWidth: 1,
        alignItems: 'center'
    },
    pickerTime: {
        height: 50,
        width: 180
    },
    btnConfirmar: {
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
    txtConfirmar: {
        color: '#FFF',
        fontSize: 18
    }
});
