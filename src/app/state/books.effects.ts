import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { BooksService } from "../books/books.service";
import { addBook, addBookFailure, addBookSuccess, loadBooks, loadBooksFailure, loadBooksSuccess } from "./books.actions";

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      mergeMap(() => this.booksService.getBooks()
        .pipe(
          map(books => loadBooksSuccess({ books })),
          catchError(error => of(loadBooksFailure({ error })))
        ))
    )
  );

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addBook),
      mergeMap(action => this.booksService.addBook(action.book)
        .pipe(
          map(book => addBookSuccess({ book })),
          catchError(error => of(addBookFailure({ error })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) {}
}