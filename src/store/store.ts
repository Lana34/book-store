import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksSlise from "./bookStore/bookStore";

const rootReducer = combineReducers({
  books: booksSlise,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
