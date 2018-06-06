import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import { access } from 'fs';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENCE',
        id: expenses[1].id // moze byc tez po prostu:: id: '2'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENCE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses); // moze byc tez cala list [expenses[0], expenses[1], expenses[2]]
});

test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])

});

test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if expense not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        update: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});
