import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";
import { Tabs } from "../../components/Tabs/Tabs";
import { BackStepIcon } from "../../components/Icons/BackStepIcon/BackStepIcon";
import { fetchBookDetailsAsync } from "../../api/booksListApi/bookDetails";
import { getStyle } from "../../styles/getStyle";
import { IBookDetails } from "../../types/books/books";
import "../BookDetails/bookDetail.css";
import { BookDetailsItem } from "../../components/BookDetailsItem/BookDetailsItem";
import { FavoriteBookIcon } from "../../components/Icons/SetFavoriteBookIcons/FavoriteBookIcon";
import { favoriteBooks } from "../FavoriteBooks/favoriteBook";
import { NotFavoriteBookIcon } from "../../components/Icons/SetFavoriteBookIcons/NotFavoriteBookIcon";

export const BookDetails = () => {
  const [favorite, setFavorite] = useState("");
  const idParams = useParams();
  const bookId: string | undefined = idParams.bookId;

  const { bookDetails, isLoading, error } = useSelector(
    (store: RootState) => store.books
  );
  const dispatch: AppDispatch = useDispatch();
  const id = bookDetails?.isbn13;

  const favoriteBook: IBookDetails = {
    title: bookDetails?.title,
    authors: bookDetails?.authors,
    publisher: bookDetails?.publisher,
    year: bookDetails?.year,
    rating: bookDetails?.rating,
    isbn13: bookDetails?.isbn13,
    price: bookDetails?.price,
    image: bookDetails?.image,
    amount: 1,
  };

  useEffect(() => {
    dispatch(fetchBookDetailsAsync(bookId));
  }, [dispatch, bookId]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <div className="bookDetails">
        <BackStepIcon />
        <h1 className="bookDetails__name">{bookDetails?.title}</h1>
        <div className="bookDetails__block">
          <div className="bookDetails__imgWrapper" style={getStyle(id)}>
            {favorite === "favorite" ? (
              <FavoriteBookIcon bookId={bookId} setFavorite={setFavorite} />
            ) : (
              <NotFavoriteBookIcon
                bookId={bookId}
                setFavorite={setFavorite}
                favoriteBook={favoriteBook}
                favoriteBooks={favoriteBooks}
              />
            )}
            <img
              className="bookDetails__img"
              src={bookDetails?.image}
              alt="book"
            />
          </div>
          <BookDetailsItem
            price={bookDetails?.price}
            authors={bookDetails?.authors}
            publisher={bookDetails?.publisher}
            language={bookDetails?.language}
            url={bookDetails?.url}
            rating={bookDetails?.rating}
            favoriteBook={favoriteBook}
            isbn13={bookDetails?.isbn13}
          />
        </div>
        <Tabs authors={bookDetails?.authors} desc={bookDetails?.desc} />
      </div>
    </div>
  );
};
