import React from 'react';
import { useParams } from 'react-router-dom';

const Number = () => {
    const {id} = useParams()
    return (
        <div>
            {
            isNaN(id)?
            <h1>This is Word</h1>
            :
            <h1>The Number is: {id}</h1>
            }
        </div>
    );
}

export default Number;
