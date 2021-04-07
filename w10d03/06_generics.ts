interface IContainer<T, U> {
  title: string;
  contents: T;
  secondContainer?: U;
}

const strContainer: IContainer<string, number> = {
  title: 'string container',
  contents: 'hello'
}

const numContainer: IContainer<number, number> = {
  title: 'number container',
  contents: 42,
  secondContainer: 3.14
}