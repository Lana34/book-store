import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";
import { fetchBooksSearchAsync } from "../../api/searchAPI/searchApi";
import { BooksItem } from "../../components/BooksItem/BooksItem";
import { IBooks } from "../../types/books/books";
import { BackStepIcon } from "../../components/Icons/BackStepIcon/BackStepIcon";
import { Title } from "../../components/Title/Title";
import { Pagination } from "../../components/Pagination/Pagination";

export const BooksSearch = () => {
  const [page, setPage] = useState(1);
  const { books, isLoading, error, total } = useSelector(
    (store: RootState) => store.books
  );
  const dispatch: AppDispatch = useDispatch();
  const [params] = useSearchParams();

  const searchValue = params.get("value");

  useEffect(() => {
    dispatch(fetchBooksSearchAsync(searchValue, page));
  }, [dispatch, searchValue, page]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <BackStepIcon />
      <Title content={`"${searchValue}" Search results`} />
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
      {Number(total) > 10 ? (
        <Pagination
          onNext={() => {
            setPage(page + 1);
          }}
          onPrev={() => {
            setPage(page - 1);
          }}
          onPage={(value: number) => {
            setPage(value);
          }}
          currentPage={page}
          pagesCount={Math.ceil(Number(total) / 10)}
        />
      ) : (
        <></>
      )}
    </>
  );
};
