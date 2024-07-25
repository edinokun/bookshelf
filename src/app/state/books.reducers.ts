import { createReducer, on } from "@ngrx/store";
import { Book } from "../book/book";
import { BooksActions } from "./books.actions";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.getBooks, (_state, { books }) => books),
  on(BooksActions.addBook, (state, { book }) => [...state, book])
);