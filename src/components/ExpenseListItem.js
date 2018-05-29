//export a statless functional component
//which render description, amount, createAt
//use map
import React from 'react';
//import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses.js' 
import { Link } from 'react-router-dom';

//const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount} - {createdAt}</p>
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