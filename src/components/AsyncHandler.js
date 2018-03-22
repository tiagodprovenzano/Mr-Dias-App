import React, {Component} from 'react'
import {AsyncStorage, NetInfo} from 'react-native'
import {connect} from 'react-redux'
import axios from 'axios'

import {mudaDatabase} from '../actions/AppActions'
import {dadosIniciais} from './dadosIniciais'


export class AsyncHandler extends Component{

componentWillMount(){
    //console.log('entramos em AsyncHandler')
}

_isConnected(){
    console.log('agora conectados')
    let newData= []
        let paginas = []
        let categoriasHome = []
        let categoriasContato = []
        let categoriasSobre = []
        let categoriasPortfolio = []
        let categoriasServicos = []
        axios.get('https://www.provenzanoti.com.br/mrdias/php/mrdiasStringsQuery.php')
        .then(response => {
            for(i in response.data){
                
                newData.push( JSON.parse(response.data[i]) )
                if(!paginas.includes(JSON.parse(response.data[i])['pagina'])){
                    paginas.push(JSON.parse(response.data[i])['pagina'])
                }
                
            }
        
        let database = {}

        for(i in paginas){
            database[paginas[i]] = {}
        }

        for (i in newData){
            if (newData[i]['pagina'] === 'home'){
                if(!categoriasHome.includes(newData[i]['tipo'])){
                    categoriasHome.push(newData[i]['tipo'])
                }
                let conteudo = newData[i]['conteudo']
                try{
                    let conteudo = newData[i]['conteudo']
                    database['home'][newData[i]['tipo']][newData[i]['area']] = {conteudo}
                }
                catch(e){
                    database['home'][newData[i]['tipo']] = {}
                    database['home'][newData[i]['tipo']][newData[i]['area']] = {conteudo}
                }
                               
            }
            if (newData[i]['pagina'] === 'contato'){
                if(!categoriasContato.includes(newData[i]['tipo'])){
                    categoriasContato.push(newData[i]['tipo'])
                    
                }

                let conteudo = newData[i]['conteudo']
                try{
                    let conteudo = newData[i]['conteudo']
                    database['contato'][newData[i]['tipo']][newData[i]['area']] = {conteudo}
                }
                catch(e){
                    database['contato'][newData[i]['tipo']] = {}
                    database['contato'][newData[i]['tipo']][newData[i]['area']] = {conteudo}
                }
                
            }
            if (newData[i]['pagina'] === 'sobre'){
                if(!categoriasSobre.includes(newData[i]['tipo'])){
                    categoriasSobre.push(newData[i]['tipo'])
                    
                }
                let conteudo = newData[i]['conteudo']
                try{
                    let conteudo = newData[i]['conteudo']
                    database['sobre'][newData[i]['tipo']][newData[i]['area']] = {conteudo}
                }
                catch(e){
                    database['sobre'][newData[i]['tipo']] = {}
                    database['sobre'][newData[i]['tipo']][newData[i]['area']] = {conteudo}
                }
                
            }
            if (newData[i]['pagina'] === 'portfolio'){
                if(!categoriasPortfolio.includes(newData[i]['tipo'])){
                    categoriasPortfolio.push(newData[i]['tipo'])
                    
                }
                let conteudo = newData[i]['conteudo']
                try{
                    let conteudo = newData[i]['conteudo']
                    database['portfolio'][newData[i]['tipo']][newData[i]['area']] = {conteudo}
                }
                catch(e){
                    database['portfolio'][newData[i]['tipo']] = {}
                    database['portfolio'][newData[i]['tipo']][newData[i]['area']] = {conteudo}
                }
                
            }
            if (newData[i]['pagina'] === 'servicos'){
                if(!categoriasServicos.includes(newData[i]['tipo'])){
                    categoriasServicos.push(newData[i]['tipo'])
                    
                }
                let conteudo = newData[i]['conteudo']
                try{
                    let conteudo = newData[i]['conteudo']
                    database['servicos'][newData[i]['tipo']][newData[i]['area']] = {conteudo}
                }
                catch(e){
                    database['servicos'][newData[i]['tipo']] = {}
                    database['servicos'][newData[i]['tipo']][newData[i]['area']] = {conteudo}
                }
                
            }

        }
        console.log('this.props.mudaDatabase(database)')
        this.props.mudaDatabase(database)

    
        }
    
    
    )
}

_isOffline(){
    //console.log('sem conexão')
    this.props.mudaDatabase(dadosIniciais)
}

componentWillUnmount(){
}

render(){
   // console.log(this.props.isOnline)
    if(this.props.isOnline){
        this._isConnected()
    }else{
        this._isOffline()
    }
return null
}
} 




mapStateToProps = state =>{
    
    let navegador = state.AppReducer.navegador
    let isOnline = state.AppReducer.isOnline
    
    return{
        navegador, 
        isOnline
    }
}

export default connect(mapStateToProps, {mudaDatabase})(AsyncHandler)
