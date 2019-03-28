import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/totalExpenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Total amount: {totalExpenses(props.expenses)}</h1>
        <h1>Total number of items: {props.expenses.length}</h1>
        {
            props.expenses.length  === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map(el => 
                    <ExpenseListItem
                        key={el.id}
                        {...el}
                    /> 
                )
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