import { IBookDetails } from "../books/books";

export interface IFavoriteBooksIcon {
  setFavorite: React.Dispatch<React.SetStateAction<string>>;
  bookId: string | undefined;
}

export interface INotFavoriteBooksIcon {
  setFavorite: React.Dispatch<React.SetStateAction<string>>;
  favoriteBook: IBookDetails;
  bookId: string | undefined;
  favoriteBooks: IBookDetails[];
}
