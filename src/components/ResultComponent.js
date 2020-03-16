import React from 'react';
import '../css/ResultComponent.css';

const result = (props) => {
    return (
        <div className="DisplayScreen">
            <p>{props.screen}</p>
        </div>
    )
};


export default result;