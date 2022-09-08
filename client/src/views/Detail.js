import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => {setProduct(res.data)})
            .catch(err => console.error(err));
    });

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                navigate('/product')
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <p>Product Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>

            <Link to={"/product/" + product._id + "/edit"}>
            Edit Product
            </Link>

            <button onClick={(e)=> deleteProduct(product._id)}>Delete</button>
        </div>
    )
}

export default Detail;