import Product from './Product';
import {Link, Route, Switch} from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2>Products</h2>

      <nav>
        <Link to="/products/1">Product #1</Link>
        <Link to="/products/2">Product #2</Link>
        <Link to="/products/3">Product #3</Link>
        <Link to="/products/4">Product #4</Link>
      </nav>

      <Switch>
        <Route path="/products/:productId" component={Product} />
        <Route path="/products">
          <h2>Please choose a product from the list above</h2>
        </Route>
      </Switch>

    </div>
  );
};

export default Products;
