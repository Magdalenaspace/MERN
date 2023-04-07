import React from 'react';
import { useParams } from 'react-router-dom';

const Hello = () => {
    const{word, color, bgCol} = useParams()
    return (
        <div>
            <h1 style={
                    // //If color param exists, then style this element with the values passed in
                    // color? 
                    {color: color, backgroundColor: bgCol}
                    // :null
                }>
                    The World is: {word}
            </h1> 
        </div>
    );
}

export default Hello;
