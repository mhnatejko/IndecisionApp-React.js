import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

 test('should setup remove expense action object', () => {
     const action = removeExpense({id: '123abc'});
     expect(action).toEqual({
         type: 'REMOVE_EXPENCE',
         id: '123abc'
     });
 });

 test('should setup edit expense action object', () => {
     const action = editExpense('123abc', {note: 'test note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'test note'}
    });
 });
 //2x tests for method create: testing defautl values nad testing new input
test('should setup add expense action object with provided values', () => {
    const expenseDate = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last month rent'
    }
    const action = addExpense(expenseDate);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDate,
            id: expect.any(String)
        }
    });
});

test('should setup add espense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        },
        
    })
});
