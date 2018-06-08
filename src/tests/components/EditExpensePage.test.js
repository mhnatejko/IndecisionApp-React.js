import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
// import { removeAllListeners } from 'cluster';

let editExpence, removeExpense, history, wrapper;

beforeEach(() => {
    editExpence = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(
        <EditExpensePage 
            editExpence={editExpence} 
            removeExpense={removeExpense}
            history={history}
            expense={expenses[2]}
        />
    );
});




test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpence).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
    wrapper.find("button").simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
})