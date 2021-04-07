const sayHello = (firstName: string = 'Bob', age?: number): string => {
  return `hello ${firstName}`;
};

const result = sayHello('alice');

const returningNothing = (): void => {
  console.log('hello');
};

const returningPromise = (): Promise<string> => {
  return new Promise((resolve) => {
    resolve('hello there');
  });
};

returningPromise().then(str => console.log(str));

const higherOrderFunction = (cb: (a: number) => void) => {
  cb(42);
};
