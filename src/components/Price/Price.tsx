import { IBookDetails } from "../../types/books/books";
import "./price.css";

interface IPrice {
  count: number | undefined;
  price: IBookDetails["price"];
}

export const Price = ({ count, price }: IPrice) => {
  const getPrice = () => {
    const priceValue: number = Number(price?.substring(1));
    let multiplication;
    if (count !== undefined) {
      multiplication = (priceValue * count).toFixed(2);
    }

    return multiplication;
  };

  return (
    <div className="favoriteBook_price favoriteBook_price_position">{` $${getPrice()}`}</div>
  );
};
