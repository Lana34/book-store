import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { PagesNames } from "./constants/pagesNames/pagesNames";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Books } from "./pages/Books/Books";
import "./App.css";
import { BookDetails } from "./pages/BookDetails/BookDetail";
import { FavoriteBooksList } from "./pages/FavoriteBooks/FavoriteBooks";
import { Cart } from "./pages/Cart/Cart";
import { BooksSearch } from "./pages/BooksSearch/BookSearch";

function App() {
  return (
    <Provider store={store}>
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
              element={<FavoriteBooksList />}
            />
            <Route path={PagesNames.CART} element={<Cart />} />
            <Route path={PagesNames.SEARCH} element={<BooksSearch />} />
          </Route>
          <Route path={PagesNames.NOTFOUND_PAGE} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
