import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should check removeExpense', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should check editExpanse', () => {
    const action = editExpense('123abc', {description: 'Na glong'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'Na glong'
        }
    })
})

test('checking AddExpense with values', () => {
    const expenseData = {
        description: 'Rent', 
        amount: 109500, 
        createdAt: 1000,
        notes: 'Last rent' 
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('checking AddExpense default properties (no arguments)', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            notes: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
})