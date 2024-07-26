import { createAction, props } from "@ngrx/store";
import { Book } from "../book/book";

export const loadBooks = createAction('[Book List] Load Books');
export const loadBooksSuccess = createAction('[Book List] Load Books Success', props<{ books: Book[] }>());
export const loadBooksFailure = createAction('[Book List] Load Books Failure', props<{ error: any }>());

export const addBook = createAction('[Book List] Add Book', props<{ book: Book }>());
export const addBookSuccess = createAction('[Book List] Add Book Success', props<{ book: Book }>());
export const addBookFailure = createAction('[Book List] Add Book Failure', props<{ error: any }>());