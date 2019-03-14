import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'dasd',
        description: 'Jan rent',
        note: 'final payment for apartment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
};