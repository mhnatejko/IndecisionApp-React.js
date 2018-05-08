import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            this is edit of {props.match.params.id}
        </div>
    );
}

export default EditExpensePage;

