import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

export default estilos = StyleSheet.create({
    
headerImage:{
    alignSelf: 'center', 
    height:height(10)
},

headerWrap:{
    alignSelf:'stretch',  
    ...Platform.select({
        ios:{
            shadowOffset:{  width: 3,  height: 3},
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            },
        android:{elevation:7}
    }),  
    height:height(10), 
    backgroundColor:'#F7F9F9', 
    justifyContent:'center'
},

headerPaginaTopWrap:{
    width:width(100),  
    flexDirection:'row', 
},

headerPaginaText:{
    
    fontSize:22, 
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    textAlign:'left', 
    color:'#f7941d', 
    fontWeight:'bold', 
    marginBottom:5,
    alignSelf:'center'
},
sobreTitleText:{
    
    fontSize:22, 
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    textAlign:'left', 
    color:'#f7941d', 
    fontWeight:'bold', 
    marginBottom:5
},

sobreContentText:{
    fontSize:15,
    color:'#58585a', 
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    alignSelf:'center', 
    textAlign:'left'
},

sobreContentImage:{
    alignSelf: 'center',
    borderRadius:5, 
    marginVertical:10, 
    width:width(95),
},

servicosHeaderWrap: { 
    backgroundColor:'#F2F3F4', 
    flexDirection:'row', 
    marginVertical:1, 
    alignItems:'center', 
    ...Platform.select({
        ios:{
            shadowOffset:{  width: 3,  height: 3},
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            },
        android:{elevation:4}
    }), 
    height:height(10)
},

servicosHeaderTitle: {
    textAlignVertical:'center', 
    marginHorizontal:30, 
    fontSize:20, 
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    color:'#58585a'

},

servicosContentWrap:{
    marginVertical:10,
    width:width(90), 
    alignSelf:'center', 
    backgroundColor:'#F2F3F4', 
    ...Platform.select({
        ios:{
            shadowOffset:{  width: 3,  height: 3},
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            },
        android:{elevation:3}
    }), 
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
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    fontSize:17
},

footerButtonWrap: {
    justifyContent:'flex-start', 
    marginTop:5

},

footerTextButton: {
    textAlignVertical:'top', 
    color:'#ffffff', 
    textAlign:'center', 
    fontSize:6, 
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    fontWeight:'bold',
    alignSelf:'center'
},

footerIcon: {
    alignSelf: 'center',
    height:height(9) 
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
    ...Platform.select({
        ios:{
            shadowOffset:{  width: 3,  height: 3},
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            },
        android:{elevation:4}
    }), 
    height:width(30), 
    width:width(30), 
    backgroundColor:'#F2F3F4', 
    justifyContent:'center', 
    borderRadius:10
},

homeButtomText:{
    textAlign:'center', 
    marginTop:3,
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    color:'#58585a'
},

portfolioTouchableTop:{
    backgroundColor:'#F2F3F4', 
    flexDirection:'row', 
    marginVertical:1, 
    alignItems:'center', 
    ...Platform.select({
        ios:{
            shadowOffset:{  width: 3,  height: 3},
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            },
        android:{elevation:4}
    }),
},

portfolioImageThumb:{ 
    marginLeft:10,
    alignSelf: 'center',
    borderRadius:5,  
    width:width(15),
},
portfolioFaceImageThumb:{
    
    marginLeft:10,
    marginVertical:5,
    alignSelf: 'center',
    borderRadius:10,  
    width:width(15),
    height:width(15)
},

portfolioTitleText:{
    textAlignVertical:'center', 
    marginHorizontal:30, 
    fontSize:20, 
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
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
    fontSize:20, 
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    textAlign:'left', 
    color:'#f7941d', 
    fontWeight:'bold', 
     
    alignSelf:'center', 
    paddingHorizontal:10, 
    textAlignVertical:'center'
},
contatoSubTitleText:{
    fontSize:15, 
    alignSelf:'left',
    width:width(30),
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    textAlign:'left', 
    color:'#f7941d', 
    fontWeight:'bold', 
    alignSelf:'flex-start', 
    paddingHorizontal:10,
    textAlignVertical:'center',
},
contatoSubTitleWrap:{
    width:width(90),
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'center'

},

contatoErrorMessage:{
    marginLeft:5,
fontSize:10,
color:'red',
textAlignVertical:'center'
},

contatoContentText:{
    fontSize:15, 
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    paddingHorizontal:5,
    textAlignVertical:'center', 
    textDecorationLine:'underline', 
    color: 'blue'
},

contatoFormularioTopWrap:{
    backgroundColor:'#EBEDEF', 
    marginTop:20,
    marginBottom:20,
    marginHorizontal:10,
    padding:10, 
    borderRadius:10, 
    ...Platform.select({
        ios:{
            shadowOffset:{  width: 3,  height: 3},
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            },
        android:{elevation:7}
    }),
}, 
contatoDiretoTopWrap:{
    backgroundColor:'#EBEDEF', 
    marginTop:10,
    marginBottom:10,
    marginHorizontal:10,
    padding:10, 
    borderRadius:10, 
    ...Platform.select({
        ios:{
            shadowOffset:{  width: 3,  height: 3},
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            },
        android:{elevation:7}
    }),
    flexDirection:'row'
}, 
contatoTitleTopWrap:{
    backgroundColor:'#ffffff', 
    marginTop:5,
    marginBottom:5,
    marginHorizontal:10,
    padding:10, 
    borderRadius:10, 
    ...Platform.select({
        ios:{
            shadowOffset:{  width: 3,  height: 3},
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            },
        android:{elevation:4}
    }), 
    justifyContent:'center'
}, 

contatoFormularioTextInput:{
    padding:8,  
    width:width(90), 
    marginTop:5, 
    borderRadius:10, 
    backgroundColor:'#FBFCFC', 
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
    ...Platform.select({
        ios:{fontFamily:'Helvetica'},
        android:{fontFamily:'Roboto'}
    }), 
    fontSize:20, 
    color:'#FBFCFC'
},

galleryBackButtom:{
    width:width(100),
    height:height(10),
    backgroundColor:'black', 
    ...Platform.select({
        ios:{
            shadowOffset:{  width: 3,  height: 3},
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            },
        android:{elevation:4}
    }), 
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
    ...Platform.select({
        ios:{
            shadowOffset:{  width: 3,  height: 3},
            shadowColor: 'gray',
            shadowOpacity: 0.8,
            },
        android:{elevation:7}
    }), 
    justifyContent:'center'
},


});