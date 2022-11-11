import "../Rating/rating.css";
import { RatingIcon } from "../Icons/RatingIcon/RatingIcon";

interface IRating {
  rating: string | undefined;
}

export const Rating = ({ rating }: IRating) => {
  const ratingNunmber = Number(rating);
  return (
    <div className="rating">
      <RatingIcon color={ratingNunmber > 0 ? "#313037" : "#d7d2d2"} />
      <RatingIcon color={ratingNunmber > 1 ? "#313037" : "#d7d2d2"} />
      <RatingIcon color={ratingNunmber > 2 ? "#313037" : "#d7d2d2"} />
      <RatingIcon color={ratingNunmber > 3 ? "#313037" : "#d7d2d2"} />
      <RatingIcon color={ratingNunmber > 4 ? "#313037" : "#d7d2d2"} />
    </div>
  );
};
