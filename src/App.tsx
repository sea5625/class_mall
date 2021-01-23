import { BrowserRouter, Switch, Route } from "react-router-dom";

import CartContainer from "./containers/CartContainer";
import ProductsContainer from "./containers/ProductsContainer";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ProductsContainer} />
                <Route path="/products" component={ProductsContainer} />

                <Route path="/cart" exact component={CartContainer} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
