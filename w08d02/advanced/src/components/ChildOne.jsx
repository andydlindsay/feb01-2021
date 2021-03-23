import {useContext} from 'react';
import CountContext from './CountContext';

const ChildOne = () => {
  const {setCounter} = useContext(CountContext);

  const handleClick = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Child One</h2>

      <button onClick={handleClick}>Increment counter</button>
    </div>
  );
};

export default ChildOne;
