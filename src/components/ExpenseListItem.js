import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = (props) => (
    <div>
        <p>Description: {props.description} </p>
        <p>Amount: {props.amount}</p>
        <p>Created at: {props.createdAt}</p>
        <button onClick={() => {
            props.dispatch(removeExpense({id: props.id}))
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);