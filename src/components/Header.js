import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import {width, height, totalSize} from 'react-native-dimension'
import estilos from './estilos';

export default class Header extends Component{
    render(){
        return(
            <View style={estilos.headerWrap}>
                <Image resizeMode='contain' source={require('../imgs/mrdias.png')} style={estilos.headerImage}/>
            </View>
        )
    }
}