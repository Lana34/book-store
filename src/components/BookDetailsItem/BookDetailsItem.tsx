import { IBookDetails } from "../../types/books/books";
import { Rating } from "../Rating/Rating";
import { addToCart } from "../../pages/Cart/createCart";
import { ShowMoreDetails } from "../ShowMoreDetails/ShowMoreDetails";

interface ICart {
  price: IBookDetails["price"];
  authors: IBookDetails["authors"];
  publisher: IBookDetails["publisher"];
  language: IBookDetails["language"];
  url: IBookDetails["url"];
  rating: IBookDetails["rating"];
  isbn13: IBookDetails["isbn13"];
  favoriteBook: IBookDetails;
}

export const BookDetailsItem = function({
  price,
  authors,
  publisher,
  language,
  url,
  rating,
  favoriteBook,
  isbn13,
}: ICart) {
  return (
    <div className="bookDetails__data">
      <div className="bookDetails__item">
        <p className="bookDetails__price">{price}</p>
        <Rating rating={rating} />
      </div>
      <p className="bookDetails__item">
        <span className="bookDetails__itemName">Authors:</span>
        <span className="bookDetails__itemValue">{authors}</span>
      </p>
      <p className="bookDetails__item">
        <span className="bookDetails__itemName">Publisher:</span>{" "}
        <span className="bookDetails__itemValue">{publisher}</span>
      </p>
      <p className="bookDetails__item">
        <span className="bookDetails__itemName">Language:</span>
        <span className="bookDetails__itemValue">{language}</span>
      </p>
      <p className="bookDetails__item">
        <span className="bookDetails__itemName">Format:</span>{" "}
        <span className="bookDetails__itemValue">Paper book / ebook (PDF)</span>
      </p>
      <ShowMoreDetails />
      <button
        className="bookDetails__addBtn"
        onClick={() => addToCart(favoriteBook, isbn13)}
      >
        add to cart
      </button>
      <p className="bookDetails__preview">
        <a
          className="bookDetails__Link"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Preview book
        </a>
      </p>
    </div>
  );
};
