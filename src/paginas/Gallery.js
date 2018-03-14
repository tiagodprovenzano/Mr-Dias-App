import React, {Component} from 'react'
import {View, TouchableOpacity, Text, Image} from 'react-native'
import Gallery from 'react-native-image-gallery'
import {width, height, totalSize} from 'react-native-dimension'
import {connect} from 'react-redux'

import {navegar} from '../actions/AppActions'
import estilos from '../components/estilos';

export class Galeria extends Component{
    render(){
        return(
            <View style={{flex:1}}>
            <TouchableOpacity
                    
                    activeOpacity={1}
                    style={estilos.galleryBackButtom}
                    onPress={()=>{
                       this.props.navegar('portfolio')
                    }}
                >
                    <Text style={estilos.backButtomText}>{'<'}</Text>
            </TouchableOpacity>
            <Gallery
                style={{flex:1, backgroundColor:'black'}}
                images={this.props.galeria}

            />
            </View>
        )
    }
}

const mapStateToProps = state =>{

    let source = [
        { source: require('../imgs/preWedding.jpg'), dimensions: { width: 150, height: 150 } },
        { source: require('../imgs/retratos.jpg'), dimensions: { width: 150, height: 150 } },
    ]

    let galeria = state.AppReducer.galeria
    return{
        source,
        galeria
    }
}

export default connect(mapStateToProps, {navegar})(Galeria)