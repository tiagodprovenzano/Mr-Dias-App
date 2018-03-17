import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {width, height, totalSize} from 'react-native-dimension'
import {connect} from 'react-redux'
import estilos from './estilos'
import {Icon} from 'react-native-elements'

import {navegar} from '../actions/AppActions'


export class Footer extends Component{
    _setBackground(icone){
        if(this.props.navegador === icone){
            return '#ffc553'
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
            <View style={{height:height(10),elevation:7, backgroundColor:'#263238', opacity:50, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                
                <View style={estilos.footerButtonWrap} >
                    <TouchableOpacity onPress={()=> this.props.navegar('sobre')} style={this._setLayout('sobre')}>
                    <Icon name='people' color='#4f5b62' />
                    </TouchableOpacity>
                    
                    <Text style={estilos.footerTextButton}>SOBRE</Text>
                </View>

                <View style={estilos.footerButtonWrap}>
                    <TouchableOpacity onPress={()=> this.props.navegar('servicos')} style={this._setLayout('servicos')}>
                        <Icon name='photo-camera' color='#4f5b62' />
                    </TouchableOpacity>
                    
                    <Text style={estilos.footerTextButton}>SERVIÇOS</Text>
                </View>
                <View style={estilos.footerButtonWrap}>
                    <TouchableOpacity onPress={()=> this.props.navegar('portfolio')} style={this._setLayout('portfolio')}>
                    <Icon name='photo-library' color='#4f5b62' />
                    </TouchableOpacity>
                    
                    <Text style={estilos.footerTextButton}>PORTFÓLIO</Text>
                </View>
                
                <View style={estilos.footerButtonWrap}>
                    <TouchableOpacity onPress={()=> this.props.navegar('redesSociais')} style={this._setLayout('redesSociais')}>
                    <Icon name='share' color='#4f5b62' />
                    </TouchableOpacity>
                    
                    <Text style={estilos.footerTextButton}>SOCIAL</Text>
                </View>
                
                
                
                <View style={estilos.footerButtonWrap}>
                    <TouchableOpacity onPress={()=> this.props.navegar('contato')} style={this._setLayout('contato')}>
                    <Icon name='mail' color='#4f5b62' />
                    </TouchableOpacity>
                
                    <Text style={estilos.footerTextButton}>CONTATO</Text>
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