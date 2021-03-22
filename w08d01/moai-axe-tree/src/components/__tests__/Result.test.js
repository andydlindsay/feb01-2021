import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

// import the library to be tested
import axios from 'axios';

// tell jest to mock that library
jest.mock('axios');

// some return data
const data = [
  {
    "id": 1,
    "name": "Alice",
    "points": 15
  },
  {
    "id": 2,
    "name": "Bob",
    "points": 10
  },
  {
    "id": 3,
    "name": "Carol",
    "points": 5
  }
];

test('mocking axios response', () => {
  // tell jest how to mock axios
  axios.get.mockResolvedValueOnce({ data });

  // render our component
  const { getByTestId, findByText } = render(<Result status="Waiting" />);

  // grab the high score button
  const highScoreButton = getByTestId('high-scores');

  // click on it
  fireEvent.click(highScoreButton);

  // test to see if "Bob" is in the DOM
  return findByText('Bob');
});

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('mocking functions', () => {
  // action('onAdd clicked');
  const myMockFunction = jest.fn();
  myMockFunction('some-argument');

  expect(myMockFunction).toHaveBeenCalled();
  expect(myMockFunction).toHaveBeenCalledTimes(1);
  expect(myMockFunction).toHaveBeenCalledWith('some-argument');

  const myMockThatReturns = jest.fn(() => 'something');
  const result = myMockThatReturns();

  expect(result).toBe('something');
});
