import {useState} from 'react';

const Pizza = () => {
  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('pan');
  const [newTopping, setNewTopping] = useState('');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'pan'
  });

  const setCrustType = (crust) => {
    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        crustType: crust
      };
    });
  };

  const addTopping = () => {
    // setToppings([...toppings, newTopping]);
    // setToppings((prevToppings) => {
    //   return [...prevToppings, newTopping];
    // });

    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          newTopping
        ]
      };
    });

    setNewTopping('');
  };

  return (
    <div>
      <h2>Create your own Pizza!</h2>

      <div>
        <input 
          value={pizza.crustType}
          onChange={(event) => setCrustType(event.target.value)}
        />
        <p>Crust Type: {pizza.crustType}</p>
      </div>

      <div>
        <input 
          value={newTopping}
          onChange={(event) => setNewTopping(event.target.value)}
        />
        <button onClick={addTopping}>Add topping</button>
      </div>

      <div>
        { pizza.toppings.map((topping, index) => {
          return <p key={index}>{topping}</p>
        }) }
      </div>
    </div>
  );
};

export default Pizza;
