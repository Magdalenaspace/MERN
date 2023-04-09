import React from 'react';
import {useState} from 'react';
import  { useNavigate } from 'react-router-dom'


const Form = () => {
    const [category, setCategory] = useState('')
    const [id, setId] = useState('')
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setCategory(e.target.value)
        setId(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/people/${id}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <select onChange={changeHandler}>
                    <option value=''>-----</option>
                    <option value=''>People</option>
                    <option value=''>Planets</option>
                </select>
                ID: <input type='text' onChange={changeHandler}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default Form;
