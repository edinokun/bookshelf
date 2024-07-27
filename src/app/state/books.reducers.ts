import { createReducer, on } from "@ngrx/store";
import { Book } from "../book/book";
import { addBook, addBookFailure, addBookSuccess, loadBooks, loadBooksFailure, loadBooksSuccess } from "./books.actions";

export interface BooksState {
  books: Book[];
  error: any;
  loading: boolean;
  loaded: boolean;
}

export const initialState: BooksState = {
  books: [],
  error: null,
  loading: false,
  loaded: false
};

export const booksReducer = createReducer(
  initialState,
  on(loadBooks, state => ({ ...state, loading: true })),
  on(loadBooksSuccess, (state, { books }) => ({ ...state, loading: false, books, loaded: true })),
  on(loadBooksFailure, (state, { error }) => ({ ...state, loading: false, error, loaded: false })),
  on(addBook, state => ({ ...state, loading: true })),
  on(addBookSuccess, (state, { book }) => ({ ...state, loading: false, books: [...state.books, book] })),
  on(addBookFailure, (state, { error }) => ({ ...state, loading: false, error }))
);