import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './styling/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from redux
import rootReducer from './redux/reducer'

const store = createStore(rootReducer)

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));
