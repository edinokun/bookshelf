import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { BrowserModule } from "@angular/platform-browser";
import { BookComponent } from './book/book.component';
import { BooksService } from "./books/books.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent, BooksComponent, BookComponent],
  imports: [BrowserModule],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }