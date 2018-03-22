import React, {Component} from 'react'
import {Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator, NetInfo, BackHandler} from 'react-native'
import {width, height, totalSize} from 'react-native-dimension' 
import {connect} from 'react-redux';
import axios from'axios'
import {Icon, IconProps} from 'react-native-elements'


import {navegar, mudaDatabase, mudaConStatus} from '../actions/AppActions'
import estilos from '../components/estilos'
import Servicos from './Servicos'
import Portfolio from './Portfolio'
import Contato from './Contato'
import Sobre from './Sobre'
import Social from './Social'
import Cliente from './Clientes'
import Gallery from './Gallery'
import GalleryFace from './GalleryFace'
import Header from '../components/Header'
import AsyncHandler from '../components/AsyncHandler'

export class Home extends Component{
    componentWillMount(){
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
            this.props.mudaConStatus(true)
          //  console.log('home, connected')
        }
    
        else {
            this.props.mudaConStatus(false)
         //   console.log('home, offline')
            
        }
    
    
    }
    
    
    componentDidMount(){
       
            BackHandler.addEventListener('hardwareBackPress', ()=>{
                return false
              });
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
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
        if(this.props.navegador === 'galleryFace'){
        return(
            <GalleryFace/>
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
                {/* <Text>{this.checkStatus()}</Text> */}
                <AsyncHandler/>
            </View>
        )
    }
    
    }else{
        console.log(this.props.nome)
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#F7F9F9'}}>
             <AsyncHandler/>
             <Image resizeMode='contain' source={require('../imgs/logo.png')} style={{height:height(20), alignSelf: 'center'}}/>
             <ActivityIndicator size='large'/>
            </View>
        )
    }}

    checkStatus(){
        if(this.props.isOnline){
            return 'Online'
        }else{
            return 'Offline'
        }
    }
    
}

const mapStateToProps = state =>{
    let navegador = state.AppReducer.navegador
    let database = state.AppReducer.database
    let nome = state.AppReducer.nome
    let isOnline = state.AppReducer.isOnline
    return{
        navegador,
        database, 
        nome,
        isOnline
    }
}

export default connect(mapStateToProps, {navegar, mudaDatabase, mudaConStatus})(Home)