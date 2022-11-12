import { Navigate } from "react-router-dom";
import { PagesNames } from "../constants/pagesNames/pagesNames";
import { useAuth } from "../hooks/useAuth";

interface IChildrenProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: IChildrenProps) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={PagesNames.AUTHORIZATION} />;
  }

  return children;
};
