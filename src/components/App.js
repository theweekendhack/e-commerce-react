import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";

const App = () => {
  return (
    <Router>
        
        <Switch>

            <Route exact path="/">
              <HomePage/>
            </Route>

            <Route path = "/products">
              <AddProductPage/>
            </Route>


        </Switch>
    </Router>
  )
}

export default App
