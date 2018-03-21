import React, {Component} from 'react'
import {View, TouchableOpacity, Text, Image, BackHandler} from 'react-native'
import Gallery from 'react-native-image-gallery'
import {width, height, totalSize} from 'react-native-dimension'
import {connect} from 'react-redux'

import {navegar, mudaGaleria} from '../actions/AppActions'
import estilos from '../components/estilos';

export class GaleriaFace extends Component{
    componentWillMount(){
        let temp = this.props.galeria
        let galeria = []

        for (i in Object.keys(temp)){
        console.log(temp[i].images[0].source)
        galeria.push({source:{uri:temp[i].images[0].source}})
        }
        console.log(galeria)
        this.props.mudaGaleria(galeria)
        
        
    }

    _teste(){
        this.props.navegar('portfolio')
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

    

    let galeria = state.AppReducer.galeria
    return{
        galeria
    }
}

export default connect(mapStateToProps, {navegar, mudaGaleria})(GaleriaFace)