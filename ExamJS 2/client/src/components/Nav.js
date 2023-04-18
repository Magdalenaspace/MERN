import React from 'react';
import {Link} from 'react-router-dom'


const Nav = (props) => {
    return (
        <div>
            <h1>Welcome To Shelter 🐶!</h1>
            <div>
            <Link to={'/newPet/form'}>Add a Pet to a Shelter</Link>
            <Link to={'/'}>Home</Link>
            </div>
        </div>
)}

export default Nav;