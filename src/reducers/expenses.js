// Expenses Reducer

const expensesReducerDefaultState = [];

//const expensesReducer = 

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
               action.expense                
            ];
        case 'REMOVE_EXPENCE':
            // return [
            //    ...state.filter(el=>el.id !== action.expense.id),
            // ]
            return state.filter(({ id }) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense; //jesli nic nie zmieni zwraca nienaruszony
                };
            });
        default:
            return state
        }
};

// export default expensesReducer