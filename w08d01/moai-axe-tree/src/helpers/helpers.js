export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const chooseRobotItem = (playerSelection, cheating) => {
  if (cheating) {
    // { playerSelection: computerSelection }
    const lookup = {
      Moai: 'Tree',
      Axe: 'Moai',
      Tree: 'Axe'
    };

    return lookup[playerSelection];
  } 

  const options = ['Moai', 'Axe', 'Tree'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};
