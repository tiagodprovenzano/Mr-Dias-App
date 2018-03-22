import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, FlatList, ScrollView, BackHandler} from 'react-native'
import {width, height, totalSize} from 'react-native-dimension'
import {connect} from 'react-redux'
import Gallery from 'react-native-image-gallery'

import estilos from '../components/estilos'
import {navegar, mudaGaleria, mudaFaceAlbums} from '../actions/AppActions'
import Footer from '../components/Footer'
import HeaderPagina from '../components/HeaderPagina'
import {galeriaCasamentos, galeriaEventos, galeriaNatureza, galeriaPreWeddings, galeriaRetratos, galeriaUrbana} from '../components/galerias'

export class Portfolio extends Component{
    componentWillMount(){
       
         if(this.props.isOnline){
            this._getFaceAlbums()
         }
    
    };
    
   

    _renderGallery(galeria){
        this.props.mudaGaleria(galeria)
        return (
            
            this.props.navegar('gallery')
        )
    }
    
    _renderItem(item){
        return(

            <TouchableOpacity style={estilos.portfolioTouchableTop}
            onPress={()=>this._renderGallery(item.galeria)}
            
            >
            <Image resizeMode='contain' source={item.foto} style={estilos.portfolioImageThumb}/>
            
            <Text style={estilos.portfolioTitleText}>{item.titulo}</Text>
            </TouchableOpacity>
            )
    }
   

    async _getFaceAlbums(){
        console.log('_getFaceAlbums')
        const response = await fetch(
               
            "https://graph.facebook.com/v2.12/1778686102441661/albums?fields=name,photos{images}&access_token=1782419698481261%7CoP4xuA2kj3arNVhromunhnrt5VA");
          let resposta = await response.json()
          console.log(resposta)
            this.props.mudaFaceAlbums(resposta)
    
    }

    _teste(){
        this.props.navegar('home')
    }
    
    componentDidMount(){
       
            BackHandler.addEventListener('hardwareBackPress', ()=>{
                this._teste()
                return true
              });
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }
    
    render(){
        let database = this.props.database['portfolio']['categorias']
        let funcoes = 
        [
            {titulo:database['categoria1'].conteudo, foto:require('../imgs/casamentoThumb.jpg'), galeria:galeriaCasamentos}, 
            {titulo:database['categoria2'].conteudo, foto:require('../imgs/eventosThumb.jpg'), galeria:galeriaEventos}, 
            {titulo:database['categoria3'].conteudo, foto:require('../imgs/preWeddingThumb.jpg'), galeria:galeriaPreWeddings}, 
            {titulo:database['categoria4'].conteudo, foto:require('../imgs/retratosThumb.jpg'), galeria:galeriaRetratos}, 
            {titulo:database['categoria5'].conteudo, foto:require('../imgs/naturezaThumb.jpg'), galeria:galeriaNatureza}, 
            {titulo:database['categoria6'].conteudo, foto:require('../imgs/urbanaThumb.jpg'), galeria:galeriaUrbana} 
        ]
        return(
            <View style={{flex:1,backgroundColor:'#EBEDEF', }}>
                <View style={{flex:1}}>
                
                <HeaderPagina/>
                
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={{flex:1}}>
                <FlatList
                
                data={funcoes}
                renderItem={({item})=> this._renderItem(item)}

                />
                
                {this._renderFacebookAlbum()}

                </View>
                </ScrollView>
                </View>
                {/* <Text>{this.checkStatus()}</Text> */}
                <Footer/>
            </View>
        )
    }
    checkStatus(){
        if(this.props.isOnline){
            return 'Online'
        }else{
            return 'Offline'
        }
    }

    _renderFacebookAlbum(){
        if(this.props.facebookAlbums != {}){
            return(

                <FlatList
                
                data={this.props.facebookAlbums.data}
                renderItem={({item})=>{
                    
                    if(item.name != 'Timeline Photos' && item.name != 'Profile Pictures' && item.name != "Cover Photos"){
                        return(
            
                            <TouchableOpacity style={estilos.portfolioTouchableTop}
                            onPress={()=>{
                                
                                this.props.mudaGaleria(item.photos.data)
                                this.props.navegar('galleryFace')
                            }}
                                
                            >   
                                <Image raised resizeMode='cover' source={{uri:item.photos.data[0].images[0].source}} style={estilos.portfolioFaceImageThumb}/>
                                <Text style={estilos.portfolioTitleText}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    }
                    else{
                        return null
                    }
                
                
                }}

                />

            )
        }else{
            return null
        }
    }
}

const mapStateToProps = state =>{
    let navegador = state.AppReducer.navegador
    let database = state.AppReducer.database
    let facebookAlbums = state.AppReducer.facebookAlbums
    let isOnline = state.AppReducer.isOnline
    
    return{
        navegador,
        database,
        facebookAlbums,
        isOnline

    }
}

export default connect(mapStateToProps, {navegar, mudaGaleria, mudaFaceAlbums})(Portfolio)