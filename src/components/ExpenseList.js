import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map(el => 
            <ExpenseListItem
                description={el.description}
                amount={el.amount}
                createdAt={el.createdAt}
                key={el.id}
                id={el.id}
            /> 
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}; 

export default connect(mapStateToProps)(ExpenseList);