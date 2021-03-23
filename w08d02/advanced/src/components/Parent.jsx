import {useState} from 'react';
import CountContext from './CountContext';
// import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import InBetween from './InBetween';

const Parent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{counter, setCounter}}>
        {/* <ChildOne/> */}
        <ChildTwo />
        <InBetween />
      </CountContext.Provider>
    </div>
  );
};

export default Parent;
