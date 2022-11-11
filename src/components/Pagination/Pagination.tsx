import "./pagination.css";
import { PaginationArrow } from "../Icons/PaginationArrow/PaginationArrow";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface IPagination {
  pagesCount: number;
  onNext(): void;
  onPage(value: number): void;
  onPrev(): void;
  currentPage: number;
}

export const Pagination = ({
  pagesCount,
  onNext,
  onPrev,
  onPage,
  currentPage,
}: IPagination) => {
  const [inputValue, setInputValue] = useState(0);
  const pagination: number[] = Array.from(
    { length: pagesCount },
    (_, i) => i + 1
  );

  let lastIndex: number = 8;
  let firstIndex: number = 0;

  if (currentPage > 6) {
    lastIndex = currentPage + 3;
    firstIndex = lastIndex - 6;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPage(inputValue);
  };

  return (
    <div className="pagination">
      <button
        className="pagination__prevButton"
        disabled={currentPage === 1}
        onClick={onPrev}
      >
        <PaginationArrow name="prevArrow" />
        Prev
      </button>
      <div className="pagination__pagesWrapper">
        {" "}
        <div className="pagination__pages">
          {currentPage > 6 ? (
            <>
              {pagination.slice(0, 2).map((item) => (
                <div
                  className={
                    currentPage === item
                      ? "pagination__page active"
                      : "pagination__page"
                  }
                  key={uuidv4()}
                  onClick={() => onPage(item)}
                >
                  {item}
                </div>
              ))}
              <div>...</div>
            </>
          ) : (
            <></>
          )}
          {pagination.slice(firstIndex, lastIndex).map((item, index) => (
            <div
              className={
                currentPage === item
                  ? "pagination__page active"
                  : "pagination__page"
              }
              key={uuidv4()}
              onClick={() => onPage(item)}
            >
              {item}
            </div>
          ))}
          {currentPage < pagination.length - 5 ? (
            <>
              <div>...</div>
              {pagination.slice(-2).map((item) => (
                <div
                  className={
                    currentPage === item
                      ? "pagination__page active"
                      : "pagination__page"
                  }
                  key={uuidv4()}
                  onClick={() => onPage(item)}
                >
                  {item}
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        <form className="pagination__form" onSubmit={handleSubmit}>
          <input
            className="pagination__input"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(Number(e.target.value))
            }
          />
        </form>
      </div>

      <button
        className="pagination__nextButton"
        disabled={currentPage === pagesCount}
        onClick={onNext}
      >
        Next
        <PaginationArrow name="nextArrow" />
      </button>
    </div>
  );
};
