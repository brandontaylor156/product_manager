import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'
    
const ProductList = (props) => {
    const {products, removeFromDom} = props
   
    return (
        <div>
            {products.map( (product, i) => {
                return (
                    <div key={i}>
                        <Link to={`/product/${product._id}`}><p>{product.title}, {product.price}</p></Link>
                        <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)} />
                    </div>
                )
            })
            }
        </div>
    )
}
    
export default ProductList;

