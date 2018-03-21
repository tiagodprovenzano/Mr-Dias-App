import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {width, height} from 'react-native-dimension'
import {connect} from 'react-redux'

import Header from './Header'
import {navegar} from '../actions/AppActions'
import estilos from './estilos';
import {Icon} from 'react-native-elements'

export class HeaderPagina extends Component{
    render(){
        return(
                <View style={estilos.headerPaginaTopWrap}>
                
                <TouchableOpacity
                    style={estilos.HeaderPaginaBackButtom}
                    onPress={()=>{
                        this.props.navegar('home')
                    }}
                    
                >
                    <Icon 
                        name='home'
                        color='#EBEDEF'
                        size={35}
                    />

                </TouchableOpacity>
                <View style={{width:width(82)}}>
                <View style={estilos.headerWrap}>
                    <Text style={estilos.headerPaginaText}>{this._renderHeader(this.props.navegador)}</Text>
                </View>
                </View>
                

                </View>
        )
    }
    _renderHeader(curr){
        if(curr === 'sobre'){
            return 'Sobre'
        }
        if(curr === 'servicos'){
            return 'Serviços'
        }
        if(curr === 'portfolio'){
            return 'Portfólio'
        }
        if(curr === 'portfolio'){
            return 'Portfólio'
        }
        if(curr === 'redesSociais'){
            return 'Publicações'
        }
        if(curr === 'contato'){
            return 'Contato'
        }
        if(curr === 'cliente'){
            return 'Área do Cliente'
        }
    }
}

const mapStateToProps = state =>{
    let navegador = state.AppReducer.navegador
    return{
        navegador
    }
}

export default connect(mapStateToProps, {navegar})(HeaderPagina)