import { favoriteBooks } from "./favoriteBook";
import { IBookDetails } from "../../types/books/books";
import { Title } from "../../components/Title/Title";
import "./favoriteBooks.css";
import { useState } from "react";
import { BackStepIcon } from "../../components/Icons/BackStepIcon/BackStepIcon";
import { removeBooksItem } from "./favoriteBook";
import { FavoriteBookItem } from "../../components/FavoriteBookItem/FavoriteBookItem";

export const FavoriteBooksList = () => {
  const [favoriteBooksList, setFavoriteBooksList] = useState(favoriteBooks);

  if (favoriteBooksList.length === 0) {
    return (
      <>
        <BackStepIcon />
        <div className="noFavoriteBooks">Favorite books not found</div>
      </>
    );
  }

  return (
    <div>
      <BackStepIcon />
      <Title content="Favorites" />
      <ul className="favoriteBooks">
        {favoriteBooksList?.map(
          (
            {
              isbn13,
              image,
              title,
              price,
              authors,
              publisher,
              year,
              rating,
            }: IBookDetails,
            index
          ) => (
            <li key={isbn13} className="favoriteBook_item">
              <FavoriteBookItem
                isbn13={isbn13}
                price={price}
                authors={authors}
                publisher={publisher}
                year={year}
                rating={rating}
                title={title}
                image={image}
              />
              <div
                className="favoriteBook_iconWrapper"
                key={index}
                onClick={() =>
                  removeBooksItem(index, setFavoriteBooksList, favoriteBooks)
                }
              >
                <svg
                  className="favoriteBook_icon"
                  onClick={(e) =>
                    ((e.target as SVGAElement).style.fill = "#a8a8a8")
                  }
                  width="20"
                  height="19"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.612 1.77682C16.1722 1.32838 15.65 0.972641 15.0752 0.729934C14.5005 0.487227 13.8844 0.362305 13.2623 0.362305C12.6401 0.362305 12.0241 0.487227 11.4493 0.729934C10.8746 0.972641 10.3524 1.32838 9.91255 1.77682L8.99977 2.70706L8.08699 1.77682C7.19858 0.871422 5.99364 0.362774 4.73725 0.362774C3.48085 0.362774 2.27591 0.871422 1.38751 1.77682C0.499101 2.68222 9.36088e-09 3.9102 0 5.19063C-9.36088e-09 6.47106 0.499101 7.69904 1.38751 8.60444L2.30029 9.53468L8.99977 16.3623L15.6992 9.53468L16.612 8.60444C17.0521 8.15621 17.4011 7.62401 17.6393 7.03826C17.8774 6.45251 18 5.82468 18 5.19063C18 4.55659 17.8774 3.92875 17.6393 3.343C17.4011 2.75725 17.0521 2.22505 16.612 1.77682Z" />
                </svg>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
