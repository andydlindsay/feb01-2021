const Header = (props) => {
  console.log(props);

  // const arr = useState('The Great Pizza Place');
  // const heading = arr[0];
  // const setHeading = arr[1];
  
  return (
    <div>
      <h2>{props.heading}</h2>
    </div>
  );
};

export default Header;
