import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { PagesNames } from "../constants/pagesNames/pagesNames";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import { BookDetails } from "../pages/BookDetails/BookDetail";
import { FavoriteBooksList } from "../pages/FavoriteBooks/FavoriteBooks";
import { Cart } from "../pages/Cart/Cart";
import { BooksSearch } from "../pages/BooksSearch/BookSearch";
import { Authorization } from "../pages/Authorization/Authorization";
import { Books } from "../pages/Books/Books";
import { PrivateRoute } from "./PrivateRoute";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PagesNames.MAIN_PAGE} element={<Layout />}>
          <Route index element={<Books />} />
          <Route
            path={`${PagesNames.BOOK_DETAILS}/:bookId`}
            element={<BookDetails />}
          />

          <Route
            path={PagesNames.FAVORITES_BOOKS}
            element={
              <PrivateRoute>
                <FavoriteBooksList />
              </PrivateRoute>
            }
          />
          <Route
            path={PagesNames.CART}
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route path={PagesNames.SEARCH} element={<BooksSearch />} />
          <Route path={PagesNames.AUTHORIZATION} element={<Authorization />} />
        </Route>
        <Route path={PagesNames.NOTFOUND_PAGE} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
