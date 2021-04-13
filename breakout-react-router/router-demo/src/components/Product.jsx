import {useParams, useHistory} from 'react-router-dom';

const Product = () => {
  const {productId} = useParams();
  const history = useHistory();
  // console.log(history);

  // useEffect(() => {
  //   axios.get(`/products/${productId}`)
  // }, [productId]);

  const handleClick = () => {
    history.push('/about');
  };

  return (
    <div>
      <h2>Product #{productId}</h2>

      <button onClick={handleClick}>Go to the About page</button>
    </div>
  );
};

export default Product;
