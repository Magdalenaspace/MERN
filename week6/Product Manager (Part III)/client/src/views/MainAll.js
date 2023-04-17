import axios from 'axios'
import { useEffect,useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default() => {
    
    const {id} = useParams()
    const[allProducts, setAllProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/AllProducts')
            .then(res => {
                setAllProducts(res.data); 
            })
            .catch(err=>console.log("Error: ", err))
    }, []);

    return (
        allProducts ? 
            <div>
                <h1>Display All</h1>
                <div>
                    {
                        allProducts.map((product) => (
                            <div key={product._id} className="product-container">
                                <h3>Title: {product.productTitle}</h3>
                                <h3>Price: ${product.productPrice}</h3>
                                <h3>Description: {product.productDesc}</h3>
                                <span>Edible: </span>
                                {
                                    product.edible?
                                    <span>Yes</span>:
                                    <span>No</span>
                                }
                                <hr/>
                                <div style={{display: 'flex', justifyContent: 'space-around', marginTop:'10px'}}>
                                    <button>
                                        <Link to={`/oneProduct/${product._id}`}>Details</Link>
                                    </button>
                                    <button>
                                        <Link to={`/editProduct/${product._id}`}>Edit</Link>
                                    </button>
                                </div>
                            </div>
                        ))
                    };
                </div>
            </div>  :
    <h1>Loading....</h1>
    )
}
