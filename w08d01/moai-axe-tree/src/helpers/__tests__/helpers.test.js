import { announceResult, chooseRobotItem } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('chooseRobotItem function', () => {

  test('can choose an appropriate item for the computer player', () => {
    const playerSelection = 'Axe';
    const cheating = false;

    const actual = chooseRobotItem(playerSelection, cheating);
    const options = ['Moai', 'Axe', 'Tree'];

    // const result = options.includes(actual);
    // expect(result).toBe(false);

    expect(options).toContain(actual);
    // array
  });

  test('can choose the winning item if cheating is true', () => {
    const playerSelection = 'Tree';
    const cheating = true;

    const actual = chooseRobotItem(playerSelection, cheating);
    const expected = 'Axe';

    expect(actual).toBe(expected);
  });

  // const item = chooseRobotItem(playerSelection, cheating);

});
