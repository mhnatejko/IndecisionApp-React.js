//folder localization:: c:\MAKSYMILIAN\javascript\REACT-Udemy-project1\indecision-app
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//import { setTimeout } from 'timers';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
//import './playground/promises'
const store = configureStore();


// store.dispatch(addExpense({description: "Water bill", amount: 4500}));
// store.dispatch(addExpense({description: "Gas bill", createdAt: 1000}));
// store.dispatch(addExpense({description: "Rent", amount: 10950}));
//store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('bill'));

// setTimeout(()=>{
//     store.dispatch(setTextFilter('water'));
// }, 3000)

//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//console.log(visibleExpenses);
//console.log(store.getState());


// //do rendera:: <User name='maksio' age={31}/>

//Domyslne opcje ladowane z auto na poczatku do <IndecisionApp />:: options={['option one', 'option two']}

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('appRoot'))


