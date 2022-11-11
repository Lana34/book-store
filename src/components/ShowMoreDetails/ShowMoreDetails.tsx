import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ShowDetailsIcon } from "../Icons/ShowDetailsIcons/ShowDetailsIcon";
import { HideMoreDeyails } from "../Icons/ShowDetailsIcons/HideMoreDeyails";
import "./showMoreDetails.css";

export const ShowMoreDetails = () => {
  const { bookDetails } = useSelector((store: RootState) => store.books);
  const [isShowMore, setIsShowMore] = useState(3);
  return (
    <>
      <p className="bookDetails__showMore">
        More detailse
        {isShowMore > 0 ? (
          <ShowDetailsIcon setIsShowMore={setIsShowMore} />
        ) : (
          <HideMoreDeyails setIsShowMore={setIsShowMore} />
        )}
      </p>
      {(() => {
        switch (isShowMore) {
          case 0:
            return (
              <div className="bookDetails__show">
                <p className="bookDetails__item margin">
                  <span className="bookDetails__itemName">
                    The year of publishing:
                  </span>
                  <span className="bookDetails__itemValue">
                    {bookDetails?.year}
                  </span>
                </p>
                <p className="bookDetails__item">
                  <span className="bookDetails__itemName">Pages:</span>
                  <span className="bookDetails__itemValue">
                    {bookDetails?.pages}
                  </span>
                </p>
                <p className="bookDetails__item">
                  <span className="bookDetails__itemName">ISBN-10:</span>
                  <span className="bookDetails__itemValue">
                    {bookDetails?.isbn10}
                  </span>
                </p>
                <p className="bookDetails__item">
                  <span className="bookDetails__itemName">ISBN-13:</span>
                  <span className="bookDetails__itemValue">
                    {bookDetails?.isbn13}
                  </span>
                </p>
              </div>
            );
          case 1:
            return <div className="bookDetails__hide"></div>;
          default:
            return <></>;
        }
      })()}
    </>
  );
};
