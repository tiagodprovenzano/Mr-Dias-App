import React, {Component} from 'react'
import {Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator, NetInfo} from 'react-native'
import {width, height, totalSize} from 'react-native-dimension' 
import {connect} from 'react-redux';
import axios from'axios'
import {Icon, IconProps} from 'react-native-elements'


import {navegar, mudaDatabase} from '../actions/AppActions'
import estilos from '../components/estilos'
import Servicos from './Servicos'
import Portfolio from './Portfolio'
import Contato from './Contato'
import Sobre from './Sobre'
import Social from './Social'
import Cliente from './Clientes'
import Gallery from './Gallery'
import Header from '../components/Header'

export class Home extends Component{
    _checkConectivity =()=> {

            NetInfo.isConnected.fetch().then(isConnected => {
        
                //Always false, so ignore/do nothing here
        
            });
        
            NetInfo.isConnected.addEventListener(
        
                'connectionChange',
        
                this.handleFirstConnectivityChange
        
            );
        
        }
        
        
        
        handleFirstConnectivityChange = (isConnected) => {
        
            if (isConnected == true) {
        
                console.log('connected')
        
            }
        
            else {
        
         console.log('offline')
            }
        
        }
    
    
    
    componentWillMount(){
        this._checkConectivity()        
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

        this.props.mudaDatabase(database)
                
    
        }
    
    
    )
    
    }

    render(){
    
       if(Object.keys(this.props.database).length > 0){
        
        let labelBotao = this.props.database['home']['labelBotao']
        

        if(this.props.navegador === 'servicos'){
        return(
            <Servicos/>
        )
        }
        if(this.props.navegador === 'portfolio'){
        return(
            <Portfolio/>
        )
        }
        
        if(this.props.navegador === 'contato'){
        return(
            <Contato/>
        )
        }
        if(this.props.navegador === 'redesSociais'){
        return(
            <Social/>
        )
        }
        if(this.props.navegador === 'sobre'){
        return(
            <Sobre/>
        )
        }
        if(this.props.navegador === 'cliente'){
        return(
            <Cliente/>
        )
        }
        if(this.props.navegador === 'gallery'){
        return(
            <Gallery/>
        )
        }
        
        else{
            let opcoes = [
                {titulo:labelBotao['botao1'].conteudo, chave:'sobre', icone: 'people'},
                {titulo:labelBotao['botao2'].conteudo, chave:'servicos', icone: 'photo-camera'},
                {titulo:labelBotao['botao3'].conteudo, chave:'portfolio', icone: 'photo-library'},
                {titulo:labelBotao['botao4'].conteudo, chave:'redesSociais',icone: 'share'},
                {titulo:labelBotao['botao5'].conteudo, chave:'contato', icone: 'mail'},
                {titulo:labelBotao['botao6'].conteudo, chave:'cliente', icone: 'lock'},
            ]    
        return(
            <View style={estilos.homeTopWrap}>
            <Header/>
                <FlatList
                    style={{paddingVertical:20}}
                    data={opcoes}
                    
                    numColumns={2}
                    renderItem={({item})=>{
    
                        return(
                            <View style={estilos.homeButtomWrap}>
                            <TouchableOpacity
                                onPress={()=>this.props.navegar(item.chave)}
                                style={estilos.homeTouchableWrap}
                                
                            >
                            <Icon
                                name={item.icone} size={55} color='#f7941d'/>
                                
                            </TouchableOpacity>
                            <Text style={estilos.homeButtomText}>{item.titulo}</Text>
                            </View>
                    )}}
                />
            </View>
        )
    }
    
    }else{
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#F7F9F9'}}>
             <Image resizeMode='contain' source={require('../imgs/logo.png')} style={{height:height(20), alignSelf: 'center'}}/>
            <ActivityIndicator size='large'/>
            </View>
        )
    }}

    
}

const mapStateToProps = state =>{
    let navegador = state.AppReducer.navegador
    let database = state.AppReducer.database
    return{
        navegador,
        database, 
    }
}

export default connect(mapStateToProps, {navegar, mudaDatabase})(Home)