import { createReducer, on } from "@ngrx/store";
import { Book } from "../book/book";
import { addBook, addBookFailure, addBookSuccess, loadBooks, loadBooksFailure, loadBooksSuccess } from "./books.actions";

export interface BookState {
  books: Book[];
  error: any;
  loading: boolean;
}

export const initialState: BookState = {
  books: [],
  error: null,
  loading: false
};

export const booksReducer = createReducer(
  initialState,
  on(loadBooks, state => ({ ...state, loading: true })),
  on(loadBooksSuccess, (state, { books }) => ({ ...state, loading: false, books })),
  on(loadBooksFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(addBook, state => ({ ...state, loading: true })),
  on(addBookSuccess, (state, { book }) => ({ ...state, loading: false, books: [...state.books, book] })),
  on(addBookFailure, (state, { error }) => ({ ...state, loading: false, error }))
);