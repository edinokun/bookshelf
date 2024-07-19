import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Book } from "../book/book";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    private apiUrl = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<{ items: Book[] }>(this.apiUrl)
          .pipe(
            map((books) => books.items || []),
            tap((books) => console.log('Fetching complete: ' + books.length + ' books fetched!'))
        );
    }
}