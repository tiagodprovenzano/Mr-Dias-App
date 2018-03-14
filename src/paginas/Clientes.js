import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {width, height} from 'react-native-dimension'

import {navegar} from '../actions/AppActions'
import Footer from '../components/Footer'
import HeaderPagina from '../components/HeaderPagina'

export class Clientes extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                <HeaderPagina/>
                
                <Text>Estamos em Clientes </Text>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navegar('home')
                    }}
                >
                    <Text>Voltar</Text>
                </TouchableOpacity>
                </View>
                <Footer/>
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

export default connect(mapStateToProps, {navegar})(Clientes)