import { createActionGroup, props } from "@ngrx/store";
import { Book } from "../book/book";

export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
        'Get Books': props<{ books: ReadonlyArray<Book> }>(),
        'Add Book': props<{ book: Book }>()
    },
});