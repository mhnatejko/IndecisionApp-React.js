import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
const removeExpence = ({id} = {}) => ({
    type: 'REMOVE_EXPENCE',
    id
})


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENCE:
            return state.filter(({id}) => id!== action.id);

        default: 
            return state;
    }
}





const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)


store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({description: "rent", amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: "cofee", amount: 2}))

store.dispatch(removeExpense({id: expenseOne}))

console.log(expenseOne)

const demoState = {
    expenses: [{
        id: 'jhgfgdfghj',
        description: 'january Rent',
        note: 'this was the final...',
        amount: 64658,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined 
    }
}

