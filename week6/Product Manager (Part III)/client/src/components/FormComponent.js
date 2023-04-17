import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const FormComponent = (props) => {

    const navigate = useNavigate()
    
    const [newProduct, setNewProduct] = useState({
        productTitle: "",
        productPrice: 0,
        productDesc:"",
        edible: false
    })

    const [errors, setErrors] = useState({})

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newProduct', newProduct)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    const onChangeHandler = (e) => {
        if(e.target.name === 'edible'){
            setNewProduct({...newProduct, edible: !newProduct.edible})
        }else{
            setNewProduct({...newProduct, [e.target.name]: e.target.value})
        }
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Title: </label>
                <input type="text" onChange={onChangeHandler} value={newProduct.productTitle} name='productTitle'/>
                {
                    errors.productTitle?
                    <p>{errors.productTitle.message}</p>:
                    null
                }
                <label>Price: $</label>
                <input type="number" onChange={onChangeHandler} value={newProduct.productPrice} name='productPrice'/>
                {
                    errors.productPrice?
                    <p>{errors.productPrice.message}</p>:
                    null
                }
                <label>Description:</label>
                <input type="text" onChange={onChangeHandler} value={newProduct.productDesc} name='productDesc'/>
                {
                    errors.productDesc?
                    <p>{errors.productDesc.message}</p>:
                    null
                }
                <label>Edible?</label>
                <input type="checkbox" name="edible" onChange={onChangeHandler} value={newProduct.edible}/>
                {
                    errors.edible?
                    <p>{errors.edible.message}</p>:
                    null
                }
                <br />
                <button>Add</button>
            </form>
        </div>
)}

export default FormComponent;