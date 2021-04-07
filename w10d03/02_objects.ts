interface IUser {
  id?: number;
  username: string;
  password: string;
  friends?: IUser[]
}

import numbers from './01_variables';

console.log(numbers);

// import IUser from './users.ts';

const user: IUser = {
  // id: 2,
  username: 'jstamos',
  password: '1234'
};

const users: IUser[] = [];
users.push(user);
// users.push({});
