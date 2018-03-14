import {

    MUDA_PAGINA,
    MUDA_GALERIA,
    MUDA_NOME,
    MUDA_EMAIL,
    MUDA_TELEFONE,
    MUDA_MENSAGEM, 
    MUDA_DATABASE

   } from '../actions/types.js'

const INITIAL_STATE = {

    navegador:'home',
    galeria:[],
    nome:'', 
    email:'',
    telefone:'',  
    mensagem:'',
    database:{},

}

export default (state = INITIAL_STATE, action) =>{
    // console.log(action.type)
     if (action.type == MUDA_PAGINA){
     return { ...state, navegador: action.payload }
    }
     if (action.type == MUDA_GALERIA){
     return { ...state, galeria: action.payload }
    }
     if (action.type == MUDA_NOME){
     return { ...state, nome: action.payload }
    }
     if (action.type == MUDA_EMAIL){
     return { ...state, email: action.payload }
    }
     if (action.type == MUDA_TELEFONE){
     return { ...state, telefone: action.payload }
    }
     if (action.type == MUDA_MENSAGEM){
     return { ...state, mensagem: action.payload }
    }
     if (action.type == MUDA_DATABASE){
     return { ...state, database: action.payload }
    }
    
return state
}