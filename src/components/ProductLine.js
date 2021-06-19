import {useContext} from 'react';
import EcommerceContext from '../context/EcommerceContext';
import { Link } from 'react-router-dom';

const ProductLine = ({id,title,unitPrice,extendedPrice,qty}) => 
{


    const {products,setProducts}= useContext(EcommerceContext);

    const increaseHandler = ()=>{

        
        const copiedArray = [...products]

        const foundProduct = copiedArray.find(product=> product.id === id);
        foundProduct.qty++;
        foundProduct.extendedPrice = foundProduct.qty * foundProduct.unitPrice;

        setProducts(copiedArray);
        

    }


    const decreaseHandler = ()=>{

        
        const copiedArray = [...products]; //THIS IS HOW YOU COPY AN ARRAY!
        

        const foundProduct = copiedArray.find(product=> product.id === id);
       
       if(foundProduct.qty>0)
       {
            foundProduct.qty--
            foundProduct.extendedPrice = foundProduct.qty * foundProduct.unitPrice;

            setProducts(copiedArray);
       }

    }   

    return (
        <div className="grid grid-col-4">

            <span>
                <Link to={`/products/${id}`}>
                    {title}
                </Link>
            </span>
            <div>
                <button type="button" className="btn dButton" onClick={decreaseHandler}>-</button>
                <span className="qty">{qty}</span>
                <button type="button" className="btn iButton" onClick={increaseHandler}>+</button>
            </div>
            
            <span className="unitPrice">${unitPrice.toFixed(2)}</span>
            <span className="extendedPrice">${extendedPrice.toFixed(2)}</span>
    </div>

    )
}

export default ProductLine
