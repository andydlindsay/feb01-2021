import {useContext} from 'react';
import CountContext from './CountContext';

const ChildTwo = () => {
  const {counter} = useContext(CountContext);

  return (
    <div>
      <h2>Child Two</h2>
      <h2>The current count is {counter}</h2>
    </div>
  );
};

export default ChildTwo;
