import Home from "./components/Home";
import Product from "./components/Product";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/product/:id" component={Product} exact />
    </BrowserRouter>
  );
};

export default App;
