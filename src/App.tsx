import Home from "./components/Home";
import Cart from "./components/Cart";
import Product from "./components/Product";
import OrderConfirmation from "./components/OrderConfirmation";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/add-to-cart" component={Cart} exact />
        <Route path="/product/:id" component={Product} exact />
        <Route path="/product/:id/order" component={OrderConfirmation} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
