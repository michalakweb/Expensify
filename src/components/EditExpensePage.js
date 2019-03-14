import React from 'react';

const EditExpensePage = (props) => {
    console.log(props)
    
    return (
        <div>
            Edit expense component
            <p>Editing the item with id number {props.match.params.id}</p>
        </div>
    )
}

export default EditExpensePage;