import { NavLink } from "react-router-dom";
import "../Header/header.css";
import logo from "../../assets/Bookstore.png";
import { useNavigate } from "react-router-dom";
import { PagesNames } from "../../constants/pagesNames/pagesNames";
import { Search } from "../Search/Search";
import { CartIcon } from "../Icons/HeaderIcons/CartIcon";
import { FavoriteIcon } from "../Icons/HeaderIcons/FavoriteIcon";
import { SignInIcon } from "../Icons/HeaderIcons/SignInIcon";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
      />
      <Search />
      <div className="header__link">
        <NavLink
          to={PagesNames.FAVORITES_BOOKS}
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          <FavoriteIcon />
        </NavLink>
        <NavLink
          to={PagesNames.CART}
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          <CartIcon />
        </NavLink>
        <NavLink
          to={"222"}
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          <SignInIcon />
        </NavLink>
      </div>
    </header>
  );
};
