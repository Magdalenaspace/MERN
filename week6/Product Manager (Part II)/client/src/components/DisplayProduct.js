import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const DisplayProduct = (props) => {
    const { productList, setProductsList } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/findAll')
            .then((response) => {
                console.log(response);
                setProductsList(response.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='d-flex justify-content-between'>
            {
                productList.map((product) => (
                    <div key={product._id} className='border border-dark'>
                        <h2>Title: {product.title}</h2>
                        <h2>Network: {product.price}</h2>
                        <h2>Genre: {product.description}</h2>
                        <Link className='btn btn-secondary' to={`/view/${product._id}`}>View</Link>
                    </div>
                ))
            }

        </div>
    )
}

export default DisplayProduct;
