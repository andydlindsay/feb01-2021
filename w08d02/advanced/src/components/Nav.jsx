import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <h2>Nav</h2>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
};

export default Nav;
