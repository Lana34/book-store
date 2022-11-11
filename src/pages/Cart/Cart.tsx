import { cart } from "./createCart";
import { BackStepIcon } from "../../components/Icons/BackStepIcon/BackStepIcon";
import { Title } from "../../components/Title/Title";
import { FavoriteBookItem } from "../../components/FavoriteBookItem/FavoriteBookItem";
import { IBookDetails } from "../../types/books/books";
import "./cart.css";
import { useState } from "react";
import { removeBooksItem } from "../FavoriteBooks/favoriteBook";
import { TotalPrice } from "../../components/TotalPrice/TotalPrice";

export const Cart = () => {
  const [cartList, setCartList] = useState(cart);

  if (cartList.length === 0) {
    return (
      <>
        <BackStepIcon />
        <div className="noFavoriteBooks">Cart is empty</div>;
      </>
    );
  }

  return (
    <div>
      <BackStepIcon />
      <Title content="Your Cart" />
      <ul className="favoriteBooks">
        {cartList.map(
          (
            {
              isbn13,
              image,
              title,
              authors,
              publisher,
              year,
              price,
              amount,
            }: IBookDetails,
            index
          ) => (
            <li key={isbn13} className="favoriteBook_item">
              <FavoriteBookItem
                isbn13={isbn13}
                authors={authors}
                publisher={publisher}
                year={year}
                title={title}
                image={image}
                price={price}
                amount={amount}
              />
              <svg
                onClick={() => removeBooksItem(index, setCartList, cart)}
                className="deleteBookFromCart"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6569 10.424L7.41421 6.18138L11.6569 1.93874C12.0472 1.54842 12.0472 0.914853 11.6569 0.52453C11.2665 0.134207 10.633 0.134207 10.2426 0.52453L6 4.76717L1.75736 0.52453C1.36704 0.134207 0.733469 0.134207 0.343146 0.52453C-0.0471771 0.914853 -0.0471771 1.54842 0.343146 1.93874L4.58579 6.18138L0.343146 10.424C-0.0478838 10.8151 -0.0471771 11.4479 0.343146 11.8382C0.733469 12.2286 1.36633 12.2293 1.75736 11.8382L6 7.5956L10.2426 11.8382C10.6337 12.2293 11.2665 12.2286 11.6569 11.8382C12.0472 11.4479 12.0479 10.8151 11.6569 10.424Z"
                  fill="#313037"
                />
              </svg>
            </li>
          )
        )}
        <TotalPrice />
      </ul>
    </div>
  );
};
