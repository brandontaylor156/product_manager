import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
    
const Update = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    });
    
    const updateProduct = (product) => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => console.log(res))
            .then(res => navigate('/product'))
            .catch(err => console.error(err))
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded &&
            <>
                <ProductForm
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />
                <DeleteButton productId={product._id} successCallback={() => navigate('/product')} />
                <button onClick={()=>navigate('/product')}>Home</button>
            </>
            }
        </div>
        
    )
}
    
export default Update;

