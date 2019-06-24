import React, { Component } from 'react';
import Routes from './Routes';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import ReduxThunk from 'redux-thunk';

class App extends Component { //deve ser uma classe funcional para possa ser utilizado o componentDidMount()

    initializeFirebase() {
        const firebase = require('firebase');

        var config = {
            apiKey: "AIzaSyAOs8JqS4TXGReALPCxDmQ4b1FEjCS8mzc",
            authDomain: "smartdelivery-849a1.firebaseapp.com",
            databaseURL: "https://smartdelivery-849a1.firebaseio.com",
            projectId: "smartdelivery-849a1",
            storageBucket: "smartdelivery-849a1.appspot.com",
            messagingSenderId: "827993133253",
            appId: "1:827993133253:web:663141d4f20b8bc0"
        }
        firebase.initializeApp(config);
    }

    componentDidMount() { //componentWillMount() -> falta decidir qual usar
        this.initializeFirebase();
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
