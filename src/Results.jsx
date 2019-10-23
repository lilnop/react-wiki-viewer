import React from 'react';

const Results = (props) => {
    return(
        <div>
            
                <h2>{props.title }</h2>
                <p>{props.description}</p>
                <p>{props.link}  </p>          
           

        </div>
    )
}

export default Results;