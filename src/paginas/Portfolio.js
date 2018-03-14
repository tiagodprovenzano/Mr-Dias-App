import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native'
import {width, height, totalSize} from 'react-native-dimension'
import {connect} from 'react-redux'
import Gallery from 'react-native-image-gallery'

import estilos from '../components/estilos'
import {navegar, mudaGaleria} from '../actions/AppActions'
import Footer from '../components/Footer'
import HeaderPagina from '../components/HeaderPagina'
import {galeriaCasamentos, galeriaEventos, galeriaNatureza, galeriaPreWeddings, galeriaRetratos, galeriaUrbana} from '../components/galerias'

export class Portfolio extends Component{
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
    
    render(){
        let database = this.props.database['portfolio']['categorias']
        console.log(database)
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
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                
                <HeaderPagina/>
                
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={{flex:1}}>
                <FlatList
                
                data={funcoes}
                renderItem={({item})=> this._renderItem(item)}

                />
                </View>
                </ScrollView>
                </View>
                <Footer/>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    let navegador = state.AppReducer.navegador
    let database = state.AppReducer.database
    
    return{
        navegador,
        database

    }
}

export default connect(mapStateToProps, {navegar, mudaGaleria})(Portfolio)