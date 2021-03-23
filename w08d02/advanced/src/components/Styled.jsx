import styled from 'styled-components';
import Custom from './Custom';

const Styled = () => {
  const Heading = styled.h2`
    color: turquoise;
  `;

  const Electric = styled.p`
    color: ${ props => props.amazing ? 'yellow' : 'brown' };
    background-color: ${ props => props.amazing ? 'black' : 'white' };
  `;

  const Wrapped = styled(Custom)`
    color: salmon;
    font-weight: bold;
    background-color: magenta;
  `;

  return (
    <div>
      <h2>Styled</h2>
      <Heading>Do I look good??</Heading>

      <Electric amazing>Am I electric?</Electric>
      <Electric>Am I amazing????? :(</Electric>

      <Wrapped />
      <Custom />
    </div>
  );
};

export default Styled;
