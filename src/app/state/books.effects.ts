import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, empty, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { BooksService } from "../books/books.service";
import { addBook, addBookFailure, addBookSuccess, loadBooks, loadBooksFailure, loadBooksSuccess } from "./books.actions";
import { select, Store } from "@ngrx/store";
import { selectIsLoaded } from "./books.selectors";

@Injectable()
export class BooksEffects {

  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private store: Store
  ) { }

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      withLatestFrom(this.store.pipe(select(selectIsLoaded))),
      switchMap(([, loaded]) => {
        if (loaded) {
          return EMPTY;
        }

        return this.booksService.getBooks()
          .pipe(
            map(books => loadBooksSuccess({ books })),
            catchError(error => of(loadBooksFailure({ error })))
          )
      }
      )));

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
}