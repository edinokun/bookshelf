import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "src/domain/book";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    private apiUrl = 'http://localhost:3000/books';

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiUrl);
    }
}