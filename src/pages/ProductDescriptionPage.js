import Header from "../components/Header";
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"

const ProductDescriptionPage = () => 
{

    const {id} = useParams();
    const [product, setProduct] = useState({
        title:"",
        unitPrice:0,
        description:""
    })


    useEffect(()=>{

        fetch("http://localhost:5000/products/"+id)
        .then(res=>res.json())
        .then(data=>{
            const p = {

                title : data.title,
                unitPrice : data.unitPrice,
                description : data.description
            }


            setProduct(p)            
        })
        .catch(err=>console.log(`Error ${err}`));

    },[])


    return (
        <div id="container">
            <Header />
            <main>
                <h2>Product</h2>

                <p>
                    Title : {product.title}
                </p>

                <p>
                   Unit Price : {product.unitPrice}
                </p>

                <p>
                    Description : {product.description}
                </p>

            </main>

    </div>
    )
}

export default ProductDescriptionPage
