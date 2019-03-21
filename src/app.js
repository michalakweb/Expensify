import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import 'normalize.css/normalize.css'
import './styles/styles.scss';
// The app
import AppRouter from './routers/AppRouter';
// Redux
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({
    description: 'water bill',
    amount: 4500
}));

store.dispatch(addExpense({
    description: 'gas bill',
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'rent',
    amount: 10900
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

