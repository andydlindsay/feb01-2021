import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Game from '../Game';

describe('tests for Game component', () => {
  // // global import
  // getByTestId(container, 'my-test-id');
  // // comes back from render
  // getByTestId('my-test-id');
  
  test('clicking on the robot head icon toggles the cheating state', () => {
    // render our component
    const { container, getByTestId, debug } = render(<Game />);

    // console.log(prettyDOM(container));
    // debug();

    // search inside component for the robot head icon
    const robotHeadIcon = getByTestId('robot-head-icon'); // $('#my-id');

    // click on the robot head icon
    fireEvent.click(robotHeadIcon);
    
    // check for class of 'cheating'
    expect(robotHeadIcon).toHaveClass('cheating');
    
    // click on the robot head icon again
    fireEvent.click(robotHeadIcon);
    
    // check for not having the class of 'cheating'
    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
