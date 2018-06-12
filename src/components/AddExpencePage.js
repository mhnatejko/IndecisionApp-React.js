import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
//import {addExpense} from '../actions/expenses';
import {startAddExpense} from '../actions/expenses';

export class AddExpencePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        //this.props.addExpense(expense);
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}
// const AddExpencePage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm 
//             onSubmit={(expense) => {
//                 //props.dispatch(addExpense(expense));
//                 props.onSubmit(expense);
//                 props.history.push('/')
//             }}
//         />
//     </div>
// );

const mapDispatchToProps = (dispatch) => ({
    //addExpense: (expense) => dispatch(addExpense(expense))
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpencePage);

