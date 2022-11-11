import { PagesNames } from "../../constants/pagesNames/pagesNames";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchIcon } from "../Icons/SearchIcon/SearchIcon";
import "./search.css";

export const Search = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [searchValue, setSearchValue] = useState(params.get("value") || "");

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchValue && navigate(`${PagesNames.SEARCH}/?value=${searchValue}`);
    setSearchValue("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="search">
      <div className="search__inputWrapper">
        <input
          className="search__input"
          onChange={(e) => onSearch(e)}
          value={searchValue}
          placeholder="Search"
        />
        <button className="search__button">
          {" "}
          <SearchIcon />{" "}
        </button>
      </div>
    </form>
  );
};
