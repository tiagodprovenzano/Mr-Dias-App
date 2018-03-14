import React, {Component} from 'react'
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import {width, height, totalSize} from 'react-native-dimension'
import {connect} from 'react-redux'

import {navegar} from '../actions/AppActions'
import HeaderPagina from '../components/HeaderPagina'
import Footer from '../components/Footer'
import estilos from '../components/estilos';

export class Sobre extends Component{
    render(){
        let database = this.props.database['sobre']
        console.log(Object.keys(database))
        return(
    
    <View style={{flex:1}}>
            
            <HeaderPagina/>

        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{flex:1, backgroundColor:'#FBFCFC', padding:20}}>
                <View style={{width:width(90), backgroundColor:'#E5E7E9', borderRadius:7, elevation:4}}>
                    <View style={{padding:10}}>
                        
                        <Text style={estilos.sobreTitleText}>{database['titulo']['sobre'].conteudo}</Text>
                        
                        <Text style={estilos.sobreContentText}>{database['conteudo']['conteudo1'].conteudo} </Text>
                        <Image resizeMode='contain' source={require('../imgs/londonNight.jpg')} style={estilos.sobreContentImage}/>
            
                        <Text style={estilos.sobreContentText}>{database['conteudo']['conteudo2'].conteudo}</Text>
                        <Image resizeMode='contain' source={require('../imgs/tigerButterrfly.jpg')} style={estilos.sobreContentImage}/>

                        <Text style={estilos.sobreContentText}>{database['conteudo']['conteudo3'].conteudo}</Text>
                        <Image resizeMode='contain' source={require('../imgs/maos.jpg')} style={estilos.sobreContentImage}/>

                        <Text style={estilos.sobreContentText}>{database['conteudo']['conteudo4'].conteudo}</Text>
                
                    </View>
                </View>
            </View>
        </ScrollView>
            <Footer/>
    </View>
    
)}
    
}

const mapStateToProps = state =>{
    let navegador = state.AppReducer.navegador
    let database = state.AppReducer.database
    return{
        navegador,
        database
    }
}

export default connect(mapStateToProps, {navegar})(Sobre)