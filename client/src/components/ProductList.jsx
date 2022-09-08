import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
    
const ProductList = (props) => {

    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {props.products.map( (product, i) => {
                return (
                    <div key={i}>
                        <Link to={`/product/${product._id}`}><p>{product.title}, {product.price}</p></Link>
                        <button onClick={(e)=> deleteProduct(product._id)}>Delete</button>
                    </div>
                )
            })
            }
        </div>
    )
}
    
export default ProductList;

