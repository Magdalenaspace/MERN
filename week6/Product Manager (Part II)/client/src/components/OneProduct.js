import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const OneProduct = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    console.log(id);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOne/${id}`)
        .then((res) => {
            // console.log(res.data.body)
            console.log(res.data)
            setProduct(res.data.product)
        }) // ???? 
        .catch((err) => {
            console.log(err);
        })

    }, []);
//to make sure that the effect gets triggered whenever the id changes.
    return (
        product ? 
        <div>
            <h1> Title: { product.title }</h1>
            <h1>Price: { product.price }</h1>
            <h1>Description: { product.description }</h1>
        </div> :
        <h1>Loading....</h1>
    );  
}

export default OneProduct;
