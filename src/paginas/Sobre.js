import React, {Component} from 'react'
import {View, Text, TouchableOpacity, ScrollView, Image, BackHandler, Pla} from 'react-native'
import {width, height, totalSize} from 'react-native-dimension'
import {connect} from 'react-redux'
import {Card} from 'react-native-elements'

import {navegar} from '../actions/AppActions'
import HeaderPagina from '../components/HeaderPagina'
import Footer from '../components/Footer'
import estilos from '../components/estilos';

export class Sobre extends Component{
    
   
   
    render(){
        let database = this.props.database['sobre']
//        console.log(Object.keys(database))
        return(
    
    <View style={{flex:1}}>
            
            <HeaderPagina/>

        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{flex:1, backgroundColor:'#ffffff'}}>
            <Card
                    raised
                    containerStyle={{width:width(95), alignSelf:'center', backgroundColor:'#f7f9f9', elevation:4}}
                    image={require('../imgs/londonMedium.jpg')}>
                    <Text style={{marginBottom: 10}}>
                    {database['conteudo']['conteudo1'].conteudo}
                    </Text>
                    
                    </Card>
            
            <Card
                    containerStyle={{width:width(95), alignSelf:'center', backgroundColor:'#f7f9f9', elevation:4}}
                    image={require('../imgs/tigerButterrfly.jpg')}>
                    <Text style={{marginBottom: 10}}>
                    {database['conteudo']['conteudo2'].conteudo}
                    </Text>
                    
                    </Card>
            <Card
                    containerStyle={{width:width(95), alignSelf:'center', backgroundColor:'#f7f9f9', elevation:4}}
                    image={require('../imgs/maos.jpg')}
                    imageProps={{resizeMode:'cover'}}>
                    <Text style={{marginBottom: 10}}>
                    {database['conteudo']['conteudo3'].conteudo}
                    </Text>
                    
                    </Card>
            <Card
                    containerStyle={{width:width(95), alignSelf:'center', elevation:4, backgroundColor:'#f7f9f9', marginBottom:10}}
                    image={require('../imgs/casamento.jpg')}>
                    <Text style={{marginBottom: 10}}>
                    {database['conteudo']['conteudo4'].conteudo}
                    </Text>
                    
                    </Card>
                
                <View style={{width:width(90), backgroundColor:'#f7f9f9', borderRadius:7, elevation:4}}>
                </View>
            </View>
        </ScrollView>
            <Footer/>
    </View>
    
)}

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