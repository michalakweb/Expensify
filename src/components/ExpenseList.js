import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {console.log(props.expenses)}
        {props.expenses.map((el, index) => 
            <ExpenseListItem
                key={el.id}
                description={el.description}
                amount={el.amount}
                createdAt={el.createdAt}
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