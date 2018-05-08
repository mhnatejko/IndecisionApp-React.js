//folder localization:: c:\MAKSYMILIAN\javascript\REACT-Udemy-project1\indecision-app
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'

import 'normalize.css/normalize.css'
import './styles/styles.scss';
// //do rendera:: <User name='maksio' age={31}/>

//Domyslne opcje ladowane z auto na poczatku do <IndecisionApp />:: options={['option one', 'option two']}



ReactDOM.render(<AppRouter />, document.getElementById('appRoot'))


