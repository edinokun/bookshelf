import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BooksState } from "./books.reducers";

export const selectBooksState = createFeatureSelector<BooksState>('books');

export const selectAllBooks = createSelector(
  selectBooksState,
  (state: BooksState) => state.books
);

export const selectBookLoading = createSelector(
  selectBooksState,
  (state: BooksState) => state.loading
);

export const selectBookError = createSelector(
  selectBooksState,
  (state: BooksState) => state.error
);

export const selectIsLoaded = createSelector(
  selectBooksState,
  (state: BooksState) => state.loaded
);