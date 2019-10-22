import React from 'react';

const Results = (props) => {

    return(
        <div>
            <h2>{props.data.title }</h2>
            <p>{props.data.description}</p>
            <p>{props.data.link}</p>          
        </div>
    )
}

export default Results;