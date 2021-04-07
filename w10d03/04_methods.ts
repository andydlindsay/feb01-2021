interface IAuthor {
  realName: string;
  penName: string;
  books: string[];
  writeBook: (title: string) => boolean
}

const agatha: IAuthor = {
  realName: 'agatha',
  penName: 'agnes',
  books: [],
  writeBook: (title: string) => {
    return true;
  }
};
