import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BooksItem } from "../../components/BooksItem/BooksItem";
import { RootState, AppDispatch } from "../../store/store";
import { IBooks } from "../../types/books/books";
import { fetchBooksListAsync } from "../../api/booksListApi/booksListApi";
import { Title } from "../../components/Title/Title";
import "../Books/books.css";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";

export const Books = () => {
  const { books, isLoading, error } = useSelector(
    (store: RootState) => store.books
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksListAsync());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Title content="New Releases Books" />
      <ul className="booksList">
        {books?.map(({ isbn13, image, title, price, subtitle }: IBooks) => (
          <BooksItem
            key={isbn13}
            image={image}
            isbn13={isbn13}
            title={title}
            price={price}
            subtitle={subtitle}
          />
        ))}
      </ul>
    </>
  );
};
