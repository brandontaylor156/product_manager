import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res => {
                setProducts([...products, res.data])
            })
    }

    return (
        <>
            <h1>Home</h1>
            <div>
                <ProductForm onSubmitProp={createProduct} initialTitle="" initialDescription="" initialPrice={0} />
                <hr/>
                {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
            </div>
        </>
    )
}

export default Main
