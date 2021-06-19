import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import {useState, useEffect} from "react";
import EcommerceContext from "../context/EcommerceContext";
import ProductDescriptionPage from "../pages/ProductDescriptionPage";

import "../assets/css/App.css"

const App = () => {

  //my products state stores 
  const [products, setProducts] = useState([]);


  useEffect(()=>{

    fetch(`http://localhost:5000/products`)
    .then(res=>res.json())
    .then(data=>{
  
        setProducts(data);

    })
    .catch(err=>console.log(`Error ${err}`));
  },[])


  return (
    <Router>
        
        <EcommerceContext.Provider  value={{products,setProducts}}>
        
          <Switch>
        
              <Route exact path="/">
              
                    <HomePage />
              
              </Route>

              <Route exact path = "/products">

                <AddProductPage/>

              </Route>

              <Route path = "/products/:id">

                <ProductDescriptionPage/>

              </Route>
              
          </Switch>

        </EcommerceContext.Provider>

    </Router>
  )
}

export default App
