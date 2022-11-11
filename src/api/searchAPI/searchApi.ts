import {
  booksLoading,
  booksSuccess,
  booksError,
} from "../../store/bookStore/bookStore";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

export const fetchBooksSearchAsync = (
  searchValue: string | null,
  page: number | null
) => {
  return async (dispatch: AppDispatch = useDispatch()) => {
    try {
      dispatch(booksLoading());
      const response = await fetch(
        `https://api.itbook.store/1.0/search/${searchValue}/${page}`
      ).then((response) => response.json());
      dispatch(
        booksSuccess({
          books: response.books,
          total: response.total,
          page: response.page,
        })
      );
    } catch (error) {
      dispatch(booksError(error));
    }
  };
};
