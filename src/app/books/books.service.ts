import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Book } from "../book/book";
import { HttpClient } from '@angular/common/http';
import { Store } from "@ngrx/store";
import { addBook } from "../state/books.actions";

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    private apiUrl = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';

    constructor(private http: HttpClient, private store: Store) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<{ items: Book[] }>(this.apiUrl)
            .pipe(
                map((books) => books.items || []),
                tap((books) => console.log('Fetching complete: ' + books.length + ' books fetched!'))
            );
    }

    addBook(book: Book): Observable<Book> {
        return new Observable<Book>(observer => {
            observer.next(book);
            observer.complete();
        });
    }
}