
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const CreateProduct = (props) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description:'',
    })
    const [errors, setErrors] = useState({}) //posterror

    const changeHandler = (e) => {
        // updater function  takes te rest and merging with key value
        setProduct({...product, [e.target.name]:e.target.value});
        //(...) to create a new object that merges the existing obj state
        // with a new key-value pair
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/add', product)
        .then((res) => {
            console.log(res);
            setProduct({
                title: '', 
                price: 0,
                description:''
            })

            navigate('/');
        })
        .catch((err) => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
        
    } 

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label >Title:</label>
                    <input type="text" name="title" onChange={changeHandler} value={product.title}/>                    
                    {
                        errors.title?
                        <p className='text-danger'>{errors.title.message}</p>:
                        null
                    }
                    {/* {errors.title && <p className='text-danger'>{errors.title.message}</p>} */}
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name='price' onChange={changeHandler} value={product.price}/>
                    {
                        errors.price?
                        <p className='text-danger'>{errors.price.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name='description' onChange={changeHandler} value={product.description}/>
                    {
                        errors.description?
                        <p className='text-danger'>{errors.description.message}</p>:
                        null
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default CreateProduct;
