import React from 'react';
import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

export default estilos = StyleSheet.create({

headerImage:{
    alignSelf: 'center', 
    height:height(10)
},

headerWrap:{
    alignSelf:'stretch',  
    elevation:7, 
    height:height(10), 
    backgroundColor:'#ffffff', 
    justifyContent:'center'
},

headerPaginaTopWrap:{
    width:width(100),  
    flexDirection:'row', 
},

sobreTitleText:{
    
    fontSize:22, 
    fontFamily:'Roboto', 
    textAlign:'left', 
    color:'#f7941d', 
    fontWeight:'bold', 
    marginBottom:5
},

sobreContentText:{
    fontSize:15,
    color:'#58585a', 
    fontFamily:'Roboto', 
    alignSelf:'center', 
    textAlign:'left'
},

sobreContentImage:{
    alignSelf: 'center',
    borderRadius:5, 
    marginVertical:10, 
    width:width(85),
},

servicosHeaderWrap: { 
    backgroundColor:'#E5E7E9',
    elevation:2, 
    padding:10, 
    marginVertical:7
},

servicosHeaderTitle: {
    fontWeight:'bold', 
    fontSize:20, 
    textAlign:'center',
    fontFamily: 'Roboto',
    color: '#f7941d'

},

servicosContentWrap:{
    marginBottom:10,
    width:width(90), 
    alignSelf:'center', 
    backgroundColor:'#E5E7E9', 
    elevation:3, 
    borderRadius:7
},

servicosContentImage:{
    padding:10,
    alignSelf: 'center',
    borderRadius:5, 
    marginVertical:10, 
    width:width(85),
},

servicosContentText:{
    padding:10,
    color:'#58585a', 
    fontFamily:'Roboto', 
    fontSize:17
},

footerButtonWrap: {
    justifyContent:'space-between', 
    height:height(10)

},

footerTextButton: {
    textAlignVertical:'bottom', 
    color:'#EBEDEF', 
    textAlign:'center', 
    fontSize:8, 
    fontFamily:'monospace', 
    fontWeight:'bold'
},

footerIcon: {
    alignSelf: 'center',
    height:height(10) 
},

homeTopWrap: {
    alignSelf:'center', 
    width:width(100), 
    height:height(100), 
    justifyContent:'space-around', 
    flex:1, 
    alignItems:'center', 
    backgroundColor:'#FBFCFC'
},

homeButtomWrap:{
    width:width(50), 
    alignItems:'center', 
    marginTop:20

},

homeTouchableWrap:{
    elevation:4 , 
    height:width(30), 
    width:width(30), 
    backgroundColor:'#F2F3F4', 
    justifyContent:'center', 
    borderRadius:10
},

homeButtomText:{
    textAlign:'center', 
    marginTop:3, 
    fontFamily:'Roboto', 
    color:'#58585a'
},

portfolioTouchableTop:{
    backgroundColor:'#E5E7E9', 
    flexDirection:'row', 
    marginVertical:5, 
    alignItems:'center', 
    elevation:4
},

portfolioImageThumb:{
    marginLeft:10,
    alignSelf: 'center',
    borderRadius:5,  
    width:width(15),
},

portfolioTitleText:{
    textAlignVertical:'center', 
    marginHorizontal:30, 
    fontSize:20, 
    fontFamily:'Roboto',
    color:'#58585a'
},

contatoTopWrap:{
    flex:1, 
    backgroundColor:'#FBFCFC'
},

contatoTitleWrap:{
    flex:1,
    alignItems:'center'
},

contatoTitleText:{
    fontSize:22, 
    fontFamily:'Roboto', 
    textAlign:'left', 
    color:'#f7941d', 
    fontWeight:'bold', 
    marginTop:20, 
    alignSelf:'flex-start', 
    paddingHorizontal:10
},

contatoFormularioTopWrap:{
    backgroundColor:'#EBEDEF', 
    marginTop:20,
    padding:10, 
    borderRadius:10, 
    elevation:7
}, 

contatoFormularioTextInput:{
    padding:8,  
    width:width(90), 
    marginBottom:10, 
    borderRadius:10, 
    backgroundColor:'#FBFCFC', 
    elevation:0, 
    textAlignVertical:'top'
},

contatoButtomWrap:{
    width:width(90), 
    backgroundColor:'#f7941d',
    borderRadius:10,
}, 

contatoButtonText:{
    padding: 8, 
    alignSelf:'center', 
    fontFamily:'Roboto', 
    fontSize:20, 
    color:'#FBFCFC'
},

galleryBackButtom:{
    width:width(100),
    height:height(10),
    backgroundColor:'black', 
    elevation:7, 
    justifyContent:'center', 
    position:'relative'
},

backButtomText:{
    marginLeft:30,
    fontSize:40,  
    alignSelf:'flex-start', 
    textAlignVertical:'center', 
    color:'#F2F3F4' 
},

HeaderPaginaBackButtom:{
    width:width(18), 
    height:height(10),
    backgroundColor:'#f7941d', 
    elevation:7, 
    justifyContent:'center'
},


});