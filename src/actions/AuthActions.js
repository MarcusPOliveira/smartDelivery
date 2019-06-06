//actions q gerenciam os states da aplicação
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { 
    MODIFICA_NOME,
    MODIFICA_CPF,
    MODIFICA_NUMEROCELULAR,
    MODIFICA_EMAIL,
    MODIFICA_SENHA, 
    CADASTRO_USUARIO_SUCESSO, 
    CADASTRO_USUARIO_ERRO, 
    LOGIN_USUARIO_SUCESSO, 
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO } from './types';

//MODIFICADORES
export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto //cargas úteis -> dados que podem ser utilizados dentro do reducer
    }
}

export const modificaCpf = (texto) => {
    return {
        type: MODIFICA_CPF,
        payload: texto
    }
}

export const modificaNumeroCelular = (texto) => {
    return {
        type: MODIFICA_NUMEROCELULAR,
        payload: texto
    }
}

export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto,
    }
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

//CADASTRO
export const cadastraUsuario = ({ nome, cpf, numeroCelular, email, senha }) => { //processamento assíncrono -> 1º: Return, 2º: função createUserWithEmailAndPassword
    return dispatch => {

        dispatch({ type: CADASTRO_EM_ANDAMENTO });

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                //convertendo email para base64 (caracteres como @ n podem ser armazenados em JSON)
                let emailB64 = b64.encode(email);
                firebase.database().ref(`/usuarios/${emailB64}`) //chave de obj JSON no database
                    .push({ nome, cpf, numeroCelular }) //dados a serem inseridos
                    .then(value => cadastroUsuarioSucesso(dispatch)); //função de callback -> objeto que contém os dados do user recém-cadastrado
            })
            .catch(erro => cadastroUsuarioErro(erro, dispatch)); //retorno de erro    
    }
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch (
        {
            type: CADASTRO_USUARIO_SUCESSO
        }
    )
    Actions.principal(); //key da scene a ser encaminhada
}

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch (
        {
            type: CADASTRO_USUARIO_ERRO,
            payload: erro.message
        }
    )
}

//LOGIN
export const autenticarUsuario = ({ email, senha }) => {
    return dispatch => { //dispatches acontecerão de forma sequencial

        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(erro => loginUsuarioErro(erro, dispatch));
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch (
        {
            type: LOGIN_USUARIO_SUCESSO
        }    
    )
    Actions.principal(); //key da scene a ser encaminhada
}

const loginUsuarioErro = (erro, dispatch) => {
    dispatch (
        {
            type: LOGIN_USUARIO_ERRO,
            payload: erro.message
        }
    )
}
