import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

const expenses = [{
    id: '0',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '1',
    description: 'rent',
    note: '',
    amount: 122195,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '2',
    description: 'credit',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}
]

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense when valid ID is given', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '0'})
    // expect(state.length).toBe(2) OR
    expect(state).toEqual([expenses[1], expenses[2]])

})

test('should remove expense when NOT valid ID is given', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '5'})
    expect(state.length).toBe(3)
})