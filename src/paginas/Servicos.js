import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {width, height} from 'react-native-dimension'
import Accordion from 'react-native-collapsible/Accordion';

import {navegar} from '../actions/AppActions'
import HeaderPagina from '../components/HeaderPagina'
import Footer from '../components/Footer'
import estilos from '../components/estilos'

export class Servicos extends Component{
    _renderHeader(section){
        return(
            <View style={estilos.servicosHeaderWrap}>
            <Text style={estilos.servicosHeaderTitle}>{section}</Text>
            </View>
        )
    }

    _renderContent(section, foto){
        return(
            <View style={estilos.servicosContentWrap}>
            <Image resizeMode='contain' source={foto} style={estilos.servicosContentImage}/>
            <Text style={estilos.servicosContentText}>{section}</Text>
            </View>
        )
    }

    render(){
        let eventos = 'Cobrimos eventos com um olhar fotojornalísto. Não queremos criar as mesmas fotografias que seriam tiradas com um celular. Fotos artísticas e genuínas para marcar o seu evento.'
        let retratos = 'Fotos in-loco ou in-studio. Ideais para criar materiais promocionais impressos/digitais ou para uma recordação familiar.'
        let preWedding = 'Ensaios para casais de noivos. Podem ser realizados em qualquer local, mas nossa preferência é sempre manter o contato com a natureza.\n\nTemos experiência com diversos casais, locações e estilos.'
        let casamentos = 'A cobertura fotográfica de um casamento é, na nossa opinião, o trabalho mais importante em um casamento. Deve ter a cara dos noivos e contar a história que eles demoraram uma vida para escrever.\nEntendemos isso e por essa razão fazemos nossas coberturas de casamentos fora do ttradicional, buscando uma visão fotojornalística do evento mais importante de sua vida.\n\nPacotes incluem making-off, pre-wedding e álbuns.' 
        
        let databaseLabels = this.props.database['servicos']['labelCategoria']
        let databaseContent = this.props.database['servicos']['conteudo']
        
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                
                <HeaderPagina/>

                <ScrollView style={{flexGrow:1}}>
                
                
                <Accordion
                    
                    sections={[{titulo:databaseLabels['categoria1'].conteudo, conteudo:databaseContent['categoria1'].conteudo,foto:require('../imgs/estudioMovel.jpg')}, {titulo:databaseLabels['categoria2'].conteudo, conteudo:databaseContent['categoria2'].conteudo,foto:require('../imgs/eventos.jpg')}, {titulo:databaseLabels['categoria3'].conteudo, conteudo:databaseContent['categoria3'].conteudo,foto:require('../imgs/retratos.jpg')}, {titulo:databaseLabels['categoria4'].conteudo, conteudo:databaseContent['categoria4'].conteudo,foto:require('../imgs/preWedding.jpg')}, {titulo:databaseLabels['categoria5'].conteudo, conteudo:databaseContent['categoria5'].conteudo,foto:require('../imgs/casamento.jpg')}]}
                    renderHeader={(section)=> this._renderHeader(section.titulo)}
                    renderContent={(section)=> this._renderContent(section.conteudo, section.foto)}
                    touchableComponent={TouchableOpacity}
                />
                </ScrollView>
                </View>
                <Footer/>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    let navegador = state.AppReducer.navegador
    let database = state.AppReducer.database
    return{
        database,
        navegador
    }
}

export default connect(mapStateToProps, {navegar})(Servicos)