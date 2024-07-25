import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { BooksService } from './books.service';
import { BooksActions } from '../state/books.actions';
import { Store } from '@ngrx/store';
import { selectBooks } from '../state/books.selectors';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    books$ = this.store.select(selectBooks);

    constructor(private booksService: BooksService, private store: Store) {}

    ngOnInit(): void {
        this.booksService.getBooks().subscribe((books: Book[]) => {
            this.store.dispatch(BooksActions.getBooks({ books }))
        });
    }
}
