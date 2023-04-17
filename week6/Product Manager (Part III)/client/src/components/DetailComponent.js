import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';

const DetailComponent = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) => {
                console.log(res);
                setOneProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deletedProduct/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className ='product-container'>
            <h2>{oneProduct.productTitle}</h2>
            <h2>${oneProduct.productPrice}</h2>
            <h2>{oneProduct.productDesc}</h2>
            <h2>{oneProduct.genre}</h2>
            <h2>Edible:  
            {
                oneProduct.edible?
                <span> Yes</span>:
                <span> No</span>
            }
            </h2>
            <br />
            <button onClick={() => deleteHandler(oneProduct._id)}>Delete</button>

        </div>
)}

export default DetailComponent;