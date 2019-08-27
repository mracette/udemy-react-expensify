import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('setup remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    })
});

test('setup edit expense action object', () => {
    const action = editExpense('123abc', {
        note: 'new note value',
        description: 'new description'
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value',
            description: 'new description'
        }
    });
});

test('setup add expense action object with provided values', () => {
    const expenseData = { 
        description: 'Rent', 
        note: 'August', 
        amount: 150000, 
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }   
    });
});

test('setup add expense action object with provided values', () => {
    const action = addExpense();
    console.log(action);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }   
    });
});