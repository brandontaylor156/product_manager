import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
    
const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    });
    
    return (
        <div>
            <h1>Product Details</h1>
            {loaded &&
            <>
                <p>Product Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>

                <Link to={"/product/" + product._id + "/edit"}>Edit Product</Link>

                <DeleteButton productId={product._id} successCallback={() => navigate('/product')} />
                <button onClick={()=> navigate('/product')}>Cancel</button>
            </>
            }
        </div>
    )
}

export default Detail;