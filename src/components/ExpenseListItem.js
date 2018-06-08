//export a statless functional component
//which render description, amount, createAt
//use map
import React from 'react';
//import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses.js' 
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
export const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>
        {/*{amount}*/} 
        {numeral(amount).format('$0,0.00')}
        - 
        {/*{createdAt}*/}
        {moment(createdAt).format('MMMM Do YYYY')}
        </p>
        
        
        {/* 
        <button onClick={() => {
            dispatch(removeExpense({ id }) )
        }
        }>
        remove</button>
        */}
    
    
        </div>       
)


//export default connect()(ExpenseListItem);
export default ExpenseListItem;