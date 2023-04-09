import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Form = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [userInput, setUserInput]=useState("")

    const submitHandler = ((e) => {
        e.preventDefault()
        userInput.length > 0 ?
        navigate(`/pokemon/${userInput}`) 
        : setError("Type valid pokemon name.")
    })
    const changeHandler = ((e) => {
        setUserInput(e.target.value)
    })
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>Pokemons</h1>
                <input type='text' onChange={changeHandler}/>
                <input type='submit' value='Submit'/>
                {
                    error != "" ? <h2>{error}</h2>: null
                }
            </form>
        </div>

    )
}

export default Form;
