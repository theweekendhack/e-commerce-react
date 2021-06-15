import React from 'react'

const ProductLine = ({title,unitPrice,extendedPrice,qty}) => {
    return (
        <div>
            <h1>Product Line</h1>

            Title : {title} <br/>
            Qty : {qty} <br/>
            Unit Price : {unitPrice} <br/>
            Extended Price: {extendedPrice} <br/>
         
        </div>
    )
}

export default ProductLine
