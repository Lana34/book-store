import { IBookDetails } from "../../types/books/books";
import { cacheUtil } from "../../types/localStorage/localStorage";
import { CacheKey } from "../../types/localStorage/localStorage";

export let cart: IBookDetails[] = [];

!localStorage.cart ? (cart = []) : (cart = cacheUtil.get(CacheKey.cart));

export const localStrCart = () => {
  cacheUtil.set(CacheKey.cart, cart);
};

export const addToCart = (object: IBookDetails, isbn: string | undefined) => {
  let isBookExistinCart = cart.some((item) => item.isbn13 === isbn);
  if (isBookExistinCart === false) {
    cart.push(object);
  }
  localStrCart();
};

export const addAmount = (
  isbn13: string | undefined,
  count: number | undefined,
  setCount: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
  cart.map((book) => {
    if (
      book.isbn13 === isbn13 &&
      book.amount !== undefined &&
      count !== undefined
    ) {
      setCount(count + 1);
      book.amount += 1;
    }
    return count;
  });
  localStrCart();
};

export const substructAmount = (
  isbn13: string | undefined,
  count: number | undefined,
  setCount: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
  cart.map((book) => {
    if (
      book.isbn13 === isbn13 &&
      book.amount !== undefined &&
      count !== undefined
    ) {
      setCount(count > 1 ? count - 1 : 1);
      book.amount > 1 ? (book.amount -= 1) : (book.amount = 1);
    }
    return count;
  });
  localStrCart();
};
