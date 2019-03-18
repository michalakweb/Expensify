import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import 'normalize.css/normalize.css'
import './styles/styles.scss';
// The app
import AppRouter from './routers/AppRouter';
// Redux
import configureStore from './store/configureStore'
import { setTextFilter } from './actions/filters';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({
    description: 'water bill',
    amount: 50000
}));

store.dispatch(addExpense({
    description: 'gas bill',
    amount: 50000
}));

store.dispatch(setTextFilter('bill'))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));

