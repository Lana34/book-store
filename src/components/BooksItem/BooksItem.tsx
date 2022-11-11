import { IBooks } from "../../types/books/books";
import "../BooksItem/booksItem.css";
import { Link } from "react-router-dom";
import { PagesNames } from "../../constants/pagesNames/pagesNames";
import { getStyle } from "../../styles/getStyle";

export const BooksItem = function({
  isbn13,
  image,
  title,
  price,
  subtitle,
}: IBooks) {
  return (
    <li className="books__item" key={isbn13}>
      <div className="books__imgWrapper" style={getStyle(isbn13)}>
        <img className="books__img" src={image} alt="post" />
      </div>
      <Link
        to={`${PagesNames.BOOK_DETAILS}/${isbn13}`}
        className="books__title"
      >
        {title}
      </Link>
      {subtitle ? <p className="books__subtitle">{subtitle}</p> : <></>}
      <div className="book__data">
        <p className="books__price">{price}</p>
      </div>
    </li>
  );
};
