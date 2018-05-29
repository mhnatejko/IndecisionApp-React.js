import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
import { create } from 'domain';











store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

//---------------------------------------------------------------------------------------------------------------------------------/
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({description: 'Cofee', amount: 300, createdAt: -1000}))
// //console.log(store)

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));


const demoState = {
    expenses: [{
        id: "dsfghjgg",
        description: 'January rent',
        note: 'This was the final paymant for  that adress',
        amount: 54500,
        ceatedAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

//.............................................................................................................
//.............................................................................................................
//.............................................................................................................
//.............................................................................................................
//.............................................................................................................
//.............................................................................................................
//.............................................................................................................
//.............................................................................................................
//.............................................................................................................
//.............................................................................................................
//.............................................................................................................

// import {createStore, combineReducers} from 'redux';
// import uuid from 'uuid';


// const addExpense = (
//     {
//         description = '',
//         note = '',
//         amount = 0,
//         createdAt = 0
//     } = {}
// ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// })

// //REMOVE_EXPENSE
// const removeExpence = ({id} = {}) => ({
//     type: 'REMOVE_EXPENCE',
//     id
// });

// //EDIT_EXPENSE
// const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
// });

// //SET_TEXT_FILTER
// const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
// });

// //SORT_BY_DATE
// const sortByDate = () => ({
//     type: 'SORT_BY_DATE',    
// });

// //SORT_BY_AMOUNT
// const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT',
// });

// //SET_START_DATE
// const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
// });
// //SET_END_DATE
// const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
// });
// const expensesReducerDefaultState = [];

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [
//                 ...state,
//                 action.expense
//             ];
//         case 'REMOVE_EXPENCE':
//             return state.filter(({id}) => id!== action.id);
//         case 'EDIT_EXPENSE':
//             return state.map((expense)=>{
//                 if(expense.id ===action.id){
//                     return {
//                         ...expense,
//                         ...action.updates
//                     }
//                 }else{
//                     return expense;
//                 }
//             });
//         default: 
//             return state;
//     }
// }





// const filtersReducerDefaultState = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
// }

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT_FILTER':
//             return {
//                 ...state,
//                 text: action.text
//             };
//         case 'SORT_BY_AMOUNT':
//             return {
//                 ...state,
//                 sortBy: 'amount'
//             };
//         case 'SORT_BY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             };
//         case 'SET_START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             };
//         case 'SET_END_DATE':
//             return {
//                 ...state,
//                 endDate: action.endDate
//             };
//         default: 
//             return state;
//     }
// }

// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//     return expenses.filter((expense)=>{
//         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a,b)=>{
//         if(sortBy === 'date'){
//             return a.createdAt < b.createdAt ?  1 : -1;
//         }else if (sortBy === 'amount'){
//             return a.amount < b.amount ? 1 : -1
//         }
//     });
// }

// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer,
//         filters: filtersReducer
//     })
// )


// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// })

// const expenseOne = store.dispatch(addExpense({description: "rent", amount: 100, createdAt: -10400}))
// const expenseTwo = store.dispatch(addExpense({description: "cofee", amount: 300, createdAt: -1000}))

// // store.dispatch(removeExpence({id: expenseOne.expense.id}))
// // store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

// //store.dispatch(setTextFilter('rent'));
// // store.dispatch(setTextFilter());

// // store.dispatch(sortByAmount());
// // store.dispatch(sortByDate());

// // store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());

// // store.dispatch(setEndDate(999));


// //console.log(expenseOne)

// const demoState = {
//     expenses: [{
//         id: 'jhgfgdfghj',
//         description: 'january Rent',
//         note: 'this was the final...',
//         amount: 64658,
//         createAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //amount or date
//         startDate: undefined,
//         endDate: undefined 
//     }
// }

// //example of obj spread operator:
// // var person = {
// //     name: 'miki',
// //     age: 78
// // }

// // console.log({...person, koko: 2, age:0})