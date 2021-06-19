import React,{useState,useContext} from 'react'
import EcommerceContext from '../context/EcommerceContext';
import {useHistory} from "react-router-dom"

const AddProductForm = () => 
{

    const history = useHistory();
    const {products,setProducts} = useContext(EcommerceContext);

    const [productFormData, setProductFormData] = useState({
        title:"",
        unitPrice:"",
        description :"",
        qty : 0,
        extendedPrice : 0
    })

    const formSubmitHandler = (evt)=>
    {

        evt.preventDefault();


        fetch("http://localhost:5000/products",{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },

            body: JSON.stringify(productFormData)
        })
        .then(res=>res.json())
        .then((data)=>{


            alert("Product was added to the database")
            setProducts([...products,data]);

            setProductFormData({
                title:"",
                unitPrice:"",
                description :"",
                qty : 0,
                extendedPrice : 0
            });


            history.push("/")
            
        })
        .catch(err=>console.log(`Error :${err}`));

    }


    return (
        <section id="register-section">
        
        <h1>Add Product</h1>

        <form onSubmit={formSubmitHandler}>

            <div className="form-control">
                <label htmlFor="title">Item Title</label>
                <input type="text" id="title" value={productFormData.title} onChange={(evt)=>{

                    setProductFormData({
                        ...productFormData,
                        title : evt.target.value
                    })
                }}/>
            </div>

            <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="text" id="price" value={productFormData.unitPrice} onChange={(evt)=>{

                    setProductFormData({
                        ...productFormData,
                        unitPrice : parseFloat(evt.target.value)
                    })
                    }}  />
            </div>

            <div className="form-control">
                <label htmlFor="details">Details</label>
                <textarea id="details" value={productFormData.description} onChange={(evt)=>{

                    setProductFormData({
                        ...productFormData,
                        description : evt.target.value
                    })
                    }}></textarea>
            </div>

            <div className="form-control">
                <button className="btn" type="submit">Add Product</button>
            </div>

        </form>

     </section>
    )
}

export default AddProductForm