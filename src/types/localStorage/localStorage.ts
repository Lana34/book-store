import { IBookDetails } from "../books/books";

export enum CacheKey {
  favoriteBooks = "favoriteBooks",
  cart = "cart",
}

export interface CacheValues {
  [CacheKey.favoriteBooks]: IBookDetails[];
  [CacheKey.cart]: IBookDetails[];
}

interface CacheUtil {
  set: <T extends CacheKey>(key: T, array: CacheValues[T]) => void;
  get: <T extends CacheKey>(key: T) => CacheValues[T];
  remove: (key: CacheKey) => void;
  removeAll: () => void;
}

export const cacheUtil: CacheUtil = {
  set: (key, array) => {
    localStorage.setItem(key, JSON.stringify(array));
  },
  get: (key) => JSON.parse(localStorage.getItem(key) || ""),
  remove: (key) => localStorage.removeItem(key),
  removeAll: () => localStorage.clear(),
};
