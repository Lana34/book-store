import { IBookDetails } from "../../types/books/books";
import { cacheUtil } from "../../types/localStorage/localStorage";
import { CacheKey } from "../../types/localStorage/localStorage";

export let favoriteBooks: IBookDetails[] = [];

!localStorage.favoriteBooks
  ? (favoriteBooks = [])
  : (favoriteBooks = cacheUtil.get(CacheKey.favoriteBooks));

export const localStr = () => {
  cacheUtil.set(CacheKey.favoriteBooks, favoriteBooks);
};

export const addBook = (
  object: IBookDetails,
  bookId: string | undefined,
  booksarray: IBookDetails[]
) => {
  let isBookExistinFavorite = booksarray.some((item) => item.isbn13 === bookId);
  if (isBookExistinFavorite === false) {
    booksarray.push(object);
  }
  localStr();
};

export const deleteFromFavorite = (bookId: string | undefined) => {
  const index = favoriteBooks.findIndex((item) => item.isbn13 === bookId);
  favoriteBooks.splice(index, 1);
  localStr();
};

export function removeBooksItem(
  index: number,
  setBooksArray: React.Dispatch<React.SetStateAction<IBookDetails[]>>,
  booksarray: IBookDetails[]
) {
  setTimeout(() => {
    booksarray.splice(index, 1);
    localStr();
    setBooksArray(booksarray.slice());
  }, 400);
}
