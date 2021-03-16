import {useState} from 'react';

const Visitors = () => {
  const [numVisitors, setNumVisitors] = useState(0);

  const handleClick = () => {
    // setNumVisitors(numVisitors + 1);
    // setNumVisitors(numVisitors + 1);
    // setNumVisitors(numVisitors + 1);

    setNumVisitors((prevState) => {
      return prevState + 1;
    });
    setNumVisitors((prevState) => {
      return prevState + 1;
    });
    setNumVisitors((anything) => {
      return anything + 1;
    });
  };

  return (
    <div>
      <h2>Visitor Counter</h2>

      <h3>Num visitors: {numVisitors}</h3>
      <button onClick={handleClick}>Increment Visitors</button>
    </div>
  );
};

export default Visitors;
