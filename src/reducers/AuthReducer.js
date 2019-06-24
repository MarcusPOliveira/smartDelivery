import {
    MODIFICA_NOME,
    MODIFICA_CPF,
    MODIFICA_NUMEROCELULAR,
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_CEP,
    MODIFICA_LOGRADOURO,
    MODIFICA_NUMERO,
    MODIFICA_BAIRRO,
    MODIFICA_COMPLEMENTO,
    CADASTRO_ENDERECO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    CADASTRO_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO,
    CADASTRO_ENDERECO_EM_ANDAMENTO
} from '../actions/types';
 
const INITIAL_STATE = {
    nome: '',
    cpf: '',
    numeroCelular: '',
    email: '',
    senha: '',
    
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',

    erroCadastro: ''
}

export default (state = INITIAL_STATE, action) => {
    //evoluindo o state
    switch(action.type) {
        case MODIFICA_NOME:
            return {
                ...state, //clonando o state e o modificando
                nome: action.payload //modificação no input agora ocorre
            }
        case MODIFICA_CPF:
            return {
                ...state,
                cpf: action.payload
            }
        case MODIFICA_NUMEROCELULAR:
            return {
                ...state,
                numeroCelular: action.payload
            }
        case MODIFICA_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case MODIFICA_SENHA:
            return {
                ...state,
                senha: action.payload
            }

        case MODIFICA_CEP:
            return {
                ...state,
                cep: action.payload
            }
        case MODIFICA_LOGRADOURO:
            return {
                ...state,
                logradouro: action.payload
            }
        case MODIFICA_NUMERO:
            return {
                ...state,
                numero: action.payload
            }
        case MODIFICA_BAIRRO:
            return {
                ...state,
                bairro: action.payload
            }
        case MODIFICA_COMPLEMENTO:
            return {
                ...state,
                complemento: action.payload
            }

        case CADASTRO_ENDERECO_SUCESSO:
            return {
                ...state,
                cep: '',
                logradouro: '',
                numero: '',
                bairro: '',
                complemento: ''
            }
        case CADASTRO_USUARIO_ERRO:
            return {
                ...state, //recupera o estado atual, e altera o valor da variável erroCadastro com o payload (msg de erro)
                erroCadastro: action.payload, //exibe msg de erro
                loading_cadastro: false //renderiza novamente o btnCadastrar
            }
        case CADASTRO_USUARIO_SUCESSO:
            return {
                ...state,
                nome: '',
                cpf: '',
                numeroCelular: '',
                senha: '',
                email: ''
            }
        case LOGIN_USUARIO_ERRO:
            return {
                ...state,
                erroLogin: action.payload, //exibe msg de erro
                loading_login: false //renderiza novamente o btnLogin
            }
        case LOGIN_EM_ANDAMENTO:
            return { 
                ...state,
                loading_login: true //quando o dispatch é disparado (btn Login pressionado), loading_login é evoluído para true
            }
        case CADASTRO_EM_ANDAMENTO:
            return { 
                ...state,
                loading_cadastro: true //quando o dispatch é disparado (btn Cadastro pressionado), loading_cadastro é evoluído para true
            }
        case CADASTRO_ENDERECO_EM_ANDAMENTO:
            return {
                ...state,
                loading_cadastro_endereco: true
            }
        default:
            return state;
    }
}
