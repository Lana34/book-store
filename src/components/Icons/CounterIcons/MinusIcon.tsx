import { ICounter } from "../../../types/counter/counter";
import { substructAmount } from "../../../pages/Cart/createCart";

export const MinusIcon = ({ isbn13, count, setCount }: ICounter) => {
  return (
    <svg
      onClick={() => substructAmount(isbn13, count, setCount)}
      width="56"
      height="57"
      viewBox="0 0 56 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="56"
        height="56"
        transform="translate(0 0.181152)"
        fill="white"
      />
      <rect x="22" y="27.1812" width="12" height="2" rx="1" fill="#313037" />
    </svg>
  );
};
