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
                <Header />
                </View>
                

                </View>
        )
    }
}

const mapStateToProps = state =>{
    return{

    }
}

export default connect(mapStateToProps, {navegar})(HeaderPagina)