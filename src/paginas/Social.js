import React, {Component} from 'react'
import Expo from 'expo'
import {View, Text, TouchableOpacity, Alert, FlatList, Image, BackHandler} from 'react-native'
import {connect} from 'react-redux'
import {width, height} from 'react-native-dimension'
import {Card} from 'react-native-elements'

import {navegar, mudaFaceFeed} from '../actions/AppActions'
import HeaderPagina from '../components/HeaderPagina'
import Footer from '../components/Footer'

export class Social extends Component{

    async _login(){
           /*  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1782419698481261', {
                permissions: ['public_profile', 'email', 'user_friends'],
              });
            if (type === 'success') {
              // Get the user's name using Facebook's Graph API */
              const response = await fetch(
               
                "https://graph.facebook.com/v2.12/1778686102441661/posts?fields=full_picture,message&access_token=1782419698481261%7CoP4xuA2kj3arNVhromunhnrt5VA");
              let resposta = await response.json()
                console.log(resposta)
                this.props.mudaFaceFeed(resposta)
              
            

    }

    componentWillMount(){
        this._login()
    }

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
        if(this.props.facebookFeed != {}){
        console.log(this.props.facebookFeed.data)
        return(
                
            <View style={{backgroundColor:'#EBEDEF', flex:1}}>
                <View style={{flex:1}}>
                
                <HeaderPagina/>

                <FlatList
                    data={this.props.facebookFeed.data}
                    renderItem={ ({item}) =>{
                        if(item.message === undefined){
                            return(null)
                        }else{
                        return(

                        <Card
                        containerStyle={{width:width(95), alignSelf:'center', backgroundColor:'#f7f9f9', elevation:4}}
                        >        
                        <Image
                                raised
                                resizeMode='cover'
                                style={{width: width(90), height:width(59)}}
                                source={{uri: item.full_picture}}
                                />

                            <Text style={{marginTop:10,fontFamily:'Roboto'}}>{item.message}</Text> 
                        </Card>
                        )
                    }}}
                    
                /> 
                </View>
                <Footer/>
            </View>
        )
    }else{
        return(
            <View style={{backgroundColor:'#EBEDEF', flex:1}}>
            <View style={{flex:1}}>
            
            <HeaderPagina/>

            <Text>Estamos em Social sem dados</Text>
            
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
    }}
}

const mapStateToProps = state =>{
    let navegador = state.AppReducer.navegador
    let facebookFeed = state.AppReducer.facebookFeed
    return{
        navegador,
        facebookFeed,
    }
}

export default connect(mapStateToProps, {navegar, mudaFaceFeed})(Social)