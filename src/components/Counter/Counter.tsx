import { useState } from "react";
import { IBookDetails } from "../../types/books/books";
import { Price } from "../Price/Price";
import { MinusIcon } from "../Icons/CounterIcons/MinusIcon";
import { PlusIcon } from "../Icons/CounterIcons/PlusIcon";
import "./counter.css";

export const Counter = ({ price, amount, isbn13 }: IBookDetails) => {
  const [count, setCount] = useState(amount);

  return (
    <>
      <div className="counter">
        <MinusIcon isbn13={isbn13} count={count} setCount={setCount} />
        {count}
        <PlusIcon isbn13={isbn13} count={count} setCount={setCount} />
      </div>
      <Price count={count} price={price} />
    </>
  );
};
