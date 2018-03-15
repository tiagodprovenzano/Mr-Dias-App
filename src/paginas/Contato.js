import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, Alert, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {width, height} from 'react-native-dimension'
import axios from 'axios'
import Accordion from 'react-native-collapsible/Accordion';

import estilos from '../components/estilos'
import {navegar, mudaEmail, mudaMensagem, mudaNome, mudaTelefone, mudaArrVerif} from '../actions/AppActions'
import HeaderPagina from '../components/HeaderPagina'
import Footer from '../components/Footer'
import {formValidation} from '../components/formValidation'

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
    
    _mensagemErro(input){
        console.log('entramos na mensagem com ' + input)
        let arrVerif = this.props.arrVerif
        if (arrVerif.length > 0){
            for (i in arrVerif){
                if(arrVerif[i].tipo === input){
                    return (
                    <Text style={estilos.contatoErrorMessage}>*{arrVerif[i].mensagem}</Text>
                )
                }
            }
        }
    }

    _renderHeader(section){
        let database = this.props.database['contato']
        if(section === 'Formulário'){
            return(
                <View style={estilos.contatoTitleTopWrap} >
                <Text style={estilos.contatoTitleText}>
                        {database['formulario']['titulo'].conteudo}
                </Text>
                </View>
            )
        }
        if(section === 'Dados de contato'){
            return( 
            <View style={estilos.contatoTitleTopWrap} >
                <Text style={estilos.contatoTitleText}>Contato direto:</Text>
            </View>
            )
       
        }
    }
    _renderContent(section){
        let database = this.props.database['contato']
        if(section === 'Formulário'){
            return(
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
                    {this._mensagemErro('nome')}
                    <TextInput
                        placeholder={database['formulario']['placeholder2'].conteudo}
                        style={estilos.contatoFormularioTextInput}
                        underlineColorAndroid='#FBFCFC'
                        value={this.props.email}
                        onChangeText={(text)=>{
                            
                            this.props.mudaEmail(text)
                        
                        }}    
                    />
                    {this._mensagemErro('email')}
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
                    {this._mensagemErro('mensagem')}
                    <TouchableOpacity style={estilos.contatoButtomWrap}
                        onPress={()=> {
                        let arrVerif = []
                        
                        if(formValidation(this.props.mensagem, 'mensagem') != null){
                            let verif = formValidation(this.props.mensagem, 'mensagem')
                            arrVerif.push(verif)
                        }
                        if(formValidation(this.props.nome, 'nome') != null){
                            arrVerif.push(formValidation(this.props.nome, 'nome'))
                        }
                        if(formValidation(this.props.email, 'email') != null){
                            arrVerif.push(formValidation(this.props.email, 'email'))
                        }

                        if(arrVerif.length === 0){
                            this.props.mudaArrVerif(arrVerif)
                            this._post()
                        }else{
                            this.props.mudaArrVerif(arrVerif)
                            Alert.alert('Erro no envio.', 'Verifique os dados inseridos.')
                        }



                        }}
                    >
                        <Text style={estilos.contatoButtonText}>Enviar</Text>
                    
                    </TouchableOpacity>
                </View>
            )
        }
        if(section === 'Dados de contato'){
            return(
            <View >
            <View style={estilos.contatoDiretoTopWrap}>
                <View style={{width:width(20)}}>
                    <Text style={estilos.contatoSubTitleText}>e-mail:</Text>
                </View>
                <TouchableOpacity style={{width:width(70)}}>
                    <Text style={estilos.contatoContentText}>contato@provenzanoti.com.br</Text>
                </TouchableOpacity>
            </View>
            <View style={estilos.contatoDiretoTopWrap}>
                <View style={{width:width(20)}}>
                    <Text style={estilos.contatoSubTitleText}>cel:</Text>
                </View>
                <TouchableOpacity style={{width:width(70)}}>
                    <Text style={estilos.contatoContentText}>(11) 95397-0679</Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.contatoDiretoTopWrap}>
            <View style={{width:width(20)}}>
                <Text style={estilos.contatoSubTitleText}>web:</Text>
            </View>
                <TouchableOpacity style={{width:width(70)}}>
                <Text style={estilos.contatoContentText}>www.provenzanoti.com.br</Text>
                </TouchableOpacity>
            </View>
            </View>
            )
        }
    }

    render(){
        let database = this.props.database['contato']
        return(
            <View style={estilos.contatoTopWrap}>
                <View style={{flex:1}}>
                
                    <HeaderPagina/>

                <View style={estilos.contatoTitleWrap}>
               <ScrollView contentContainerStyle={{flexGrow:1}}>
                <Accordion
                    
                    sections={[{titulo:'Formulário'}, {titulo:'Dados de contato'}]}
                    renderHeader={(section)=> this._renderHeader(section.titulo)}
                    renderContent={(section)=> this._renderContent(section.titulo)}
                    touchableComponent={TouchableOpacity}
                    touchableProps={style={elevation:7}}
                    initiallyActiveSection={0}
                />
                </ScrollView>   
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
    let arrVerif = state.AppReducer.arrVerif
    return{
        navegador,
        nome,
        email, 
        telefone, 
        mensagem,
        database, 
        arrVerif
    }
}

export default connect(mapStateToProps, {navegar, mudaEmail, mudaMensagem, mudaNome, mudaTelefone, mudaArrVerif})(Contato)