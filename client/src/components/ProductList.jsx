import React from 'react'
import {Link} from 'react-router-dom'
    
const ProductList = (props) => {

    return (
        <div>
            {props.products.map( (product, i) =>
                <Link to={`/product/${product._id}`} key={i}><p>{product.title}, {product.price}</p></Link>
            )}
        </div>
    )
}
    
export default ProductList;

