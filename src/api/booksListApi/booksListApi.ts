import {
  booksLoading,
  booksSuccess,
  booksError,
} from "../../store/bookStore/bookStore";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

export const fetchBooksListAsync = () => {
  return async (dispatch: AppDispatch = useDispatch()) => {
    try {
      dispatch(booksLoading());
      const response = await fetch(
        "https://api.itbook.store/1.0/new"
      ).then((response) => response.json());
      dispatch(booksSuccess({ books: response.books }));
    } catch (error) {
      dispatch(booksError(error));
    }
  };
};
