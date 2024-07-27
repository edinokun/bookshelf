import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllBooks } from '../state/books.selectors';
import { loadBooks } from '../state/books.actions';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    books$ = this.store.select(selectAllBooks);

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.store.dispatch(loadBooks());
    }
}
