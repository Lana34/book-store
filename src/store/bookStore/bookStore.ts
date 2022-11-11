import { createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../types/books/books";
import { IBookDetails } from "../../types/books/books";

export interface IBooksSliceInitialState {
  isLoading?: boolean;
  books?: IBooks[];
  bookDetails?: IBookDetails | null;
  total?: string | null;
  page?: string | null;
  error?: any;
}

const initialState: IBooksSliceInitialState = {
  isLoading: false,
  books: [],
  error: null,
  bookDetails: null,
  total: "",
  page: "",
};

const booksSlise = createSlice({
  name: "books",
  initialState,
  reducers: {
    booksLoading() {
      return { isLoading: true, books: [], error: null };
    },
    booksSuccess(_, action) {
      return {
        isLoading: false,
        books: action.payload.books,
        total: action.payload.total,
        page: action.payload.page,
      };
    },
    bookDetailsSuccess(_, action) {
      return {
        isLoading: false,
        bookDetails: action.payload,
      };
    },
    booksError(_, action) {
      return {
        isLoading: false,
        error: action.payload,
      };
    },
  },
  extraReducers: {},
});

export const {
  booksLoading,
  booksSuccess,
  bookDetailsSuccess,
  booksError,
} = booksSlise.actions;
export default booksSlise.reducer;
