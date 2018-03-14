import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers/index.js';
import Home from './src/paginas/home.js'


export default class App extends React.Component {
  componentWillMount(){
    StatusBar.setHidden(true)
}
  
  render() {
    return (
      <Provider store= {createStore (reducers, {}, applyMiddleware(ReduxThunk)) }>
        <Home/>
      </Provider>
    );
  }
}

