import { IShowMoreDetails } from "../../../types/ShowMoreDetails/ShowMoreDetails";

export const ShowDetailsIcon = ({ setIsShowMore }: IShowMoreDetails) => {
  return (
    <svg
      onClick={() => setIsShowMore(0)}
      className="bookDetails__showMoreIcon"
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L9.70711 1.70711ZM5 5L4.29289 5.70711L5 6.41421L5.70711 5.70711L5 5ZM1.70711 0.292893C1.31658 -0.0976314 0.683417 -0.0976315 0.292893 0.292893C-0.0976314 0.683417 -0.0976315 1.31658 0.292893 1.70711L1.70711 0.292893ZM8.29289 0.292893L4.29289 4.29289L5.70711 5.70711L9.70711 1.70711L8.29289 0.292893ZM5.70711 4.29289L1.70711 0.292893L0.292893 1.70711L4.29289 5.70711L5.70711 4.29289Z"
        fill="#313037"
      />
    </svg>
  );
};
