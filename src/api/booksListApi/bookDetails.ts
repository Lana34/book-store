import {
  booksLoading,
  bookDetailsSuccess,
  booksError,
} from "../../store/bookStore/bookStore";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

export const fetchBookDetailsAsync = (bookId: string | undefined) => {
  return async (dispatch: AppDispatch = useDispatch()) => {
    try {
      dispatch(booksLoading());
      const response = await fetch(
        `https://api.itbook.store/1.0/books/${bookId}`
      ).then((response) => response.json());
      dispatch(bookDetailsSuccess(response));
    } catch (error) {
      dispatch(booksError(error));
    }
  };
};
