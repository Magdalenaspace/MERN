import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/pokemon'>Pokemon</Link>
            <Link to='/form'>Form</Link>
        </div>
    );
}

export default Nav;
