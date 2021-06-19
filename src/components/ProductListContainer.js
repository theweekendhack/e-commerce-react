import ProductLine from "./ProductLine";
import EcommerceContext from "../context/EcommerceContext";
import {useContext} from "react";

const ProductListContainer = () => {


    //use a context
    const {products} = useContext(EcommerceContext);

    return (
        
        <>
            <div id="heading-area" className="grid grid-col-4">

                <h2>Product</h2>
                <h2>Quantity</h2>
                <h2>Unit Price</h2>
                <h2>Extended Price</h2>
            </div>

            <div id="product-rows-area">

                {products.map(product=>( <ProductLine id={product.id} key={product.id}title={product.title} unitPrice={product.unitPrice} qty={product.qty} extendedPrice={product.extendedPrice}/>))}
               
                <button className="btn" type="button" id="calculateButton">Calculate</button>
            </div>

         </>
    )
}

export default ProductListContainer
