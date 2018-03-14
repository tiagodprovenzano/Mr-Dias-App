import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native'
import {connect} from 'react-redux'
import {width, height} from 'react-native-dimension'
import axios from 'axios'

import estilos from '../components/estilos'
import {navegar, mudaEmail, mudaMensagem, mudaNome, mudaTelefone} from '../actions/AppActions'
import HeaderPagina from '../components/HeaderPagina'
import Footer from '../components/Footer'

export class Contato extends Component{

    async _post(){
          await axios({
            method: 'post',
            url: 'https://www.provenzanoti.com.br/mailgun.php',
            params: {
              name: this.props.nome,
              email: this.props.email,
              mensagem: this.props.mensagem,
            }
          }).then(function(response) {
          })  

        Alert.alert('Mensagem enviada', 'Mensagem enviada com sucesso',["Ok"])

        this.props.mudaMensagem('')

    }
    render(){
        let database = this.props.database['contato']
        console.log(database)
        return(
            <View style={estilos.contatoTopWrap}>
                <View style={{flex:1}}>
                
                    <HeaderPagina/>

                <View style={estilos.contatoTitleWrap}>
                    <Text style={estilos.contatoTitleText}>
                        {database['formulario']['titulo'].conteudo}
                    </Text>

                <View style={estilos.contatoFormularioTopWrap}>
                    <TextInput
                        placeholder={database['formulario']['placeholder1'].conteudo}
                        style={estilos.contatoFormularioTextInput}
                        underlineColorAndroid='#FBFCFC'
                        value={this.props.nome}
                        onChangeText={(text)=>{
                            
                            this.props.mudaNome(text)
                        
                        }}
                    />
                
                    <TextInput
                        placeholder={database['formulario']['placeholder2'].conteudo}
                        style={estilos.contatoFormularioTextInput}
                        underlineColorAndroid='#FBFCFC'
                        value={this.props.email}
                        onChangeText={(text)=>{
                            
                            this.props.mudaEmail(text)
                        
                        }}    
                    />
                
                    <TextInput
                        placeholder={database['formulario']['placeholder3'].conteudo}
                        multiline={true}
                        numberOfLines={5}
                        style={estilos.contatoFormularioTextInput}
                        underlineColorAndroid='#FBFCFC'
                        value={this.props.mensagem}
                        onChangeText={(text)=>{
                            
                            this.props.mudaMensagem(text)
                        
                        }}
                    />
                
                    <TouchableOpacity style={estilos.contatoButtomWrap}
                        onPress={()=> {
                        
                            this._post()

                        }}
                    >
                        <Text style={estilos.contatoButtonText}>Enviar</Text>
                    
                    </TouchableOpacity>
                </View>
                
                </View>
                </View>
                    <Footer/>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    let navegador = state.AppReducer.navegador
    let nome = state.AppReducer.nome
    let email = state.AppReducer.email
    let telefone = state.AppReducer.nome
    let mensagem = state.AppReducer.mensagem
    let database = state.AppReducer.database
    return{
        navegador,
        nome,
        email, 
        telefone, 
        mensagem,
        database
    }
}

export default connect(mapStateToProps, {navegar, mudaEmail, mudaMensagem, mudaNome, mudaTelefone})(Contato)