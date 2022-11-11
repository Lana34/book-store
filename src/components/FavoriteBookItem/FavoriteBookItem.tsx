import { IBookDetails } from "../../types/books/books";
import { getStyle } from "../../styles/getStyle";
import { Rating } from "../Rating/Rating";
import { useNavigate } from "react-router-dom";
import { PagesNames } from "../../constants/pagesNames/pagesNames";
import { Counter } from "../Counter/Counter";
import "./favoriteBookItem.css";

export const FavoriteBookItem = function({
  isbn13,
  image,
  title,
  price,
  authors,
  publisher,
  year,
  rating,
  amount,
}: IBookDetails) {
  const navigate = useNavigate();

  return (
    <>
      <div className="favoriteBook_imgWrapper" style={getStyle(isbn13)}>
        <img className="favoriteBook_img" src={image} alt="post" />
      </div>
      <div className="favoriteBook_data">
        <h1
          className="favoriteBook_title"
          onClick={() => navigate(`${PagesNames.BOOK_DETAILS}/${isbn13}`)}
        >
          {title}
        </h1>
        <p className="favoriteBook_authors">
          by {authors}, {publisher} {year}
        </p>
        {rating ? (
          <div className="favoriteBook_price">
            {price} <Rating rating={rating} />
          </div>
        ) : (
          <Counter isbn13={isbn13} price={price} amount={amount} />
        )}
      </div>
    </>
  );
};
