import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {width, height, totalSize} from 'react-native-dimension'
import {connect} from 'react-redux'
import estilos from './estilos'

import {navegar} from '../actions/AppActions'


export class Footer extends Component{
    _setBackground(icone){
        if(this.props.navegador === icone){
            return '#f7941d'
        }else{
            return '#F2F3F4'
        }
    }

    _setLayout(page){

    layout = StyleSheet.create({

        buttomWrap:{elevation:7,
            backgroundColor:this._setBackground(page), 
            justifyContent:'center', 
            height:height(8), 
            width:height(8), 
            borderRadius:8}
    
    })

    return (layout.buttomWrap)
    }

    

    render(){
        return(
            <View style={{height:height(12),elevation:7, backgroundColor:'#283747', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                
                <View style={estilos.footerButtonWrap} >
                    <TouchableOpacity onPress={()=> this.props.navegar('sobre')} style={this._setLayout('sobre')}>
                        <Image resizeMode='contain' source={require('../imgs/sobrePeq.png')} style={estilos.footerIcon}/>
                        
                    </TouchableOpacity>
                    
                    <Text style={estilos.footerTextButton}>Sobre</Text>
                </View>

                <View style={estilos.footerButtonWrap}>
                    <TouchableOpacity onPress={()=> this.props.navegar('portfolio')} style={this._setLayout('portfolio')}>
                        <Image resizeMode='contain' source={require('../imgs/portfolioPeq.png')} style={estilos.footerIcon}/>
                    </TouchableOpacity>
                    
                    <Text style={estilos.footerTextButton}>Portfólio</Text>
                </View>
                
                <View style={estilos.footerButtonWrap}>
                    <TouchableOpacity onPress={()=> this.props.navegar('redesSociais')} style={this._setLayout('redesSociais')}>
                        <Image resizeMode='contain' source={require('../imgs/redesPeq.png')} style={estilos.footerIcon}/>
                    </TouchableOpacity>
                    
                    <Text style={estilos.footerTextButton}>Social</Text>
                </View>
                
                <View style={estilos.footerButtonWrap}>
                    <TouchableOpacity onPress={()=> this.props.navegar('servicos')} style={this._setLayout('servicos')}>
                        <Image resizeMode='contain' source={require('../imgs/servicosPeq.png')} style={estilos.footerIcon}/>
                    </TouchableOpacity>
                    
                    <Text style={estilos.footerTextButton}>Serviços</Text>
                </View>
                
                <View style={estilos.footerButtonWrap}>
                    <TouchableOpacity onPress={()=> this.props.navegar('contato')} style={this._setLayout('contato')}>
                        <Image resizeMode='contain' source={require('../imgs/contatoPeq.png')} style={estilos.footerIcon}/>
                    </TouchableOpacity>
                
                    <Text style={estilos.footerTextButton}>Contato</Text>
                </View>
                
                <View style={estilos.footerButtonWrap}>
                    <TouchableOpacity onPress={()=> this.props.navegar('cliente')} style={this._setLayout('cliente')}>
                        <Image resizeMode='contain' source={require('../imgs/padlockPeq.png')} style={estilos.footerIcon}/>
                    </TouchableOpacity>
                
                    <Text style={estilos.footerTextButton}>Login</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    let navegador = state.AppReducer.navegador
    return{
        navegador
    }
}

export default connect(mapStateToProps, {navegar})(Footer)