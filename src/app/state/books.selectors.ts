import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookState } from "./books.reducers";

export const selectBookState = createFeatureSelector<BookState>('books');

export const selectAllBooks = createSelector(
  selectBookState,
  (state: BookState) => state.books
);

export const selectBookLoading = createSelector(
  selectBookState,
  (state: BookState) => state.loading
);

export const selectBookError = createSelector(
  selectBookState,
  (state: BookState) => state.error
);