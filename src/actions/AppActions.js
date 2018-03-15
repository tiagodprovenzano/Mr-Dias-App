import {

    MUDA_PAGINA,
    MUDA_GALERIA,
    MUDA_NOME,
    MUDA_EMAIL,
    MUDA_TELEFONE,
    MUDA_MENSAGEM, 
    MUDA_DATABASE,
    MUDA_ARRVERIF

} from './types'

export const navegar = (pagina) => {
    return {
        type: MUDA_PAGINA,
        payload: pagina
    }
}
export const mudaGaleria = (galeria) => {
    return {
        type: MUDA_GALERIA,
        payload: galeria
    }
}
export const mudaNome = (nome) => {
    return {
        type: MUDA_NOME,
        payload: nome
    }
}
export const mudaEmail = (email) => {
    return {
        type: MUDA_EMAIL,
        payload: email
    }
}
export const mudaTelefone = (telefone) => {
    return {
        type: MUDA_TELEFONE,
        payload: telefone
    }
}
export const mudaMensagem = (mensagem) => {
    return {
        type: MUDA_MENSAGEM,
        payload: mensagem
    }
}
export const mudaDatabase = (data) => {
    return {
        type: MUDA_DATABASE,
        payload: data
    }
}
export const mudaArrVerif = (arr) => {
    return {
        type: MUDA_ARRVERIF,
        payload: arr
    }
}