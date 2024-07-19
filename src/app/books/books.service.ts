import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Book } from "src/domain/book";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    private apiUrl = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<{ items: Book[] }>(this.apiUrl)
          .pipe(map((books) => books.items || []));
    }
}