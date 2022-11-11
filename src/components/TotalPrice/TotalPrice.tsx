import { useEffect, useState } from "react";
import { cart } from "../../pages/Cart/createCart";
import "./totalPrice.css";

export const TotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [VAT, setVAT] = useState(0);

  const getTotalPrice = () => {
    let sum: number = 0;

    cart.map((item) => {
      if (item.amount !== undefined) {
        sum += item.amount * Number(item.price?.substring(1));
        setTotalPrice(sum);
        setVAT((sum * 18) / 100);
      }
      return sum;
    });
  };

  useEffect(() => {
    setInterval(getTotalPrice, 1000);
  }, []);

  return (
    <div className="totalPrice">
      <p className="totalPrice__sum">
        <span className="totalPrice__itemName">Sum total:</span>
        {`$${totalPrice.toFixed(2)}`}
      </p>
      <p className="totalPrice__vat">
        <span className="totalPrice__itemName">VAT:</span>
        {`$${VAT.toFixed(2)}`}
      </p>
      <p className="total__sum">
        <span className="total__sumName">Total:</span>
        {`$${(totalPrice + VAT).toFixed(2)}`}
      </p>
      <button className="totalPrice__button">check out</button>
    </div>
  );
};
