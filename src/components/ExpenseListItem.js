import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>{props.description}</Link>
        <p>Amount: {props.amount}</p>
        <p>Created at: {props.createdAt}</p>
    </div>
);

export default ExpenseListItem;