import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "../book/book";

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');