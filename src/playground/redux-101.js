import {createStore} from 'redux';

// const add = (data) => {
//     return data.a + data.b
// }
// console.log(add({a:1, b:12}))

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1 }={}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const setCount = ({count}) => ({
    type: 'SET',
    count: count
})

const resetCount = () => ({
    type: 'RESET'
    
})

//reducrers

const countReducer = (state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'RESET':
            return {
                count: 0 // count: state.count = 0
            }
        case 'DECREMENT':
             return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
})


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
// store.dispatch({
//     type: 'INCREMENT',
// });

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch(resetCount({}));

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({count: 101}));

// store.dispatch({
//     type: 'RESET'
// });
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });


// store.dispatch({
//     type: 'DECREMENT',
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });



