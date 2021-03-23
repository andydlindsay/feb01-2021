import {useParams, useHistory} from 'react-router-dom';

const Product = () => {
  // useParams gives us the route parameters
  const params = useParams();
  console.log(params);

  // useHistory gives us a history object
  const history = useHistory();
  console.log(history);

  const clickHandler = () => {
    history.push('/about');
  };

  return (
    <div>
      <h2>Product #{params.productId}</h2>

      <button onClick={clickHandler}>Go to the About page</button>
    </div>
  );
};

export default Product;
