interface IUser {
  username: string;
  password: string;
  age?: number
}

const login = (user: IUser): boolean => {
  return user.username === 'jstamos';
};

const user = {
  username: 'jstamos',
  password: '1234',
  age: 50
};

user.age

login(user);
