import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateComponent = (props) => {
    const {id} = useParams()

    const navigate = useNavigate()
    const [updatedPro, setupdatedPro] = useState({
        productTitle: "",
        productPrice: 0,
        productDesc:"",
        edible: false
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        if(e.target.name === 'edible'){
            setupdatedPro({...updatedPro, edible: !updatedPro.edible})
        }else{
            setupdatedPro({...updatedPro, [e.target.name]: e.target.value})
        }
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) => {
                console.log(res);
                setupdatedPro(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updatedProduct/${id}`, updatedPro)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <h2>Edit your Product</h2>
            <form onSubmit={submitHandler}>
                <label>Title:</label>
                <input type="text" onChange={changeHandler} value={updatedPro.productTitle} name='productTitle'/>
                {
                    errors.productTitle?
                    <p>{errors.productTitle.message}</p>:
                    null
                }

                <label>Price: $</label>
                <input type="number" onChange={changeHandler} value={updatedPro.productPrice} name='productPrice'/>
                {
                    errors.productPrice?
                    <p>{errors.productPrice.message}</p>:
                    null
                }
                <label>Description:</label>
                <input type="text" onChange={changeHandler} value={updatedPro.productDesc} name='productDesc'/>
                {
                    errors.productDesc?
                    <p>{errors.productDesc.message}</p>:
                    null
                }
                <label>Edible</label>
                <input type="checkbox" name="edible" onChange={changeHandler} value={updatedPro.edible}/>
                {
                    errors.edible?
                    <p>{errors.edible.message}</p>:
                    null
                }
                <br />
                <button>Update</button>
            </form>
        </div>
)}

export default UpdateComponent;