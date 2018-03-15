import React, {Component} from 'react'

export function formValidation (dados,  tipo) {
    if (tipo === 'mensagem'){
        //Validating 'message' 

        //if data is empty return an error message
        if(dados === ''){
            return {mensagem:'Por favor escreva uma mensagem.', tipo:tipo}
        }else{
            return null
        }
    }

    //Validating 'email' 
    if (tipo === 'email'){
    if(dados === ''){
        return {mensagem:'Por favor, insira seu e-mail.', tipo:tipo}
    }else{
        if(!dados.includes('@')){
            return {mensagem:'O email deve conter "@".', tipo:tipo}
        }else{
            console.log(dados.split('@')[1].includes('.'))
            if(!dados.split('@')[1].includes('.')){
                return {mensagem:'Erro na formatação do email - email não contém ponto', tipo:tipo}
            }else{
                if(dados.split('@')[1].split('.')[0].length === 0){
                    return {mensagem:'Erro na formatação do email - domínio inválido', tipo:tipo}
                }else{
                    if(dados.split('@')[1].split('.')[dados.split('@')[1].split('.').length -1].length=== 0){
                        return{mensagem:'Erro na formatação do email - email inválido', tipo:tipo}
                    }
                }
            }
        }

    }

    }

    //Validating sender's name
    if (tipo === 'nome'){
        if(dados === ''){
            return {mensagem:'Nome inválido.', tipo:tipo}
        }else{
            return null
        }
    }

}

