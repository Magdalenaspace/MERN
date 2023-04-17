import axios from 'axios';
import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import FormComponent from './FormComponent';

const Nav = (props) => {
    return (
        <div>
            <h1>Product Manager</h1>
            <div>
            <Link to={'/createProduct/form'}>Create a Product</Link>
            <Link to={'/'}>Home</Link>
            </div>
        </div>
)}

export default Nav;