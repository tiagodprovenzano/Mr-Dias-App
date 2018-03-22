import React, {Component} from 'react'
import {View, Text, TouchableOpacity, BackHandler} from 'react-native'
import {connect} from 'react-redux'
import {width, height} from 'react-native-dimension'
import {SocialIcon} from 'react-native-elements'

import {navegar} from '../actions/AppActions'
import Footer from '../components/Footer'
import HeaderPagina from '../components/HeaderPagina'

export class Clientes extends Component{
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
        return(
            <View style={{flex:1,  backgroundColor:'#FBFCFC'}}>
                <View style={{flex:1, alignItems:'center'}}>
                <HeaderPagina/>
                
                <View style={{flex:1, justifyContent:'center', width:width(80)}}>
                <SocialIcon
                title='Continuar com o Facebook'
                type='facebook'
                button
                onPress={()=>{console.log('facebook login')}}
                containerStyle={{alignSelf:'center'}}
                />

                
                </View>
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

export default connect(mapStateToProps, {navegar})(Clientes)