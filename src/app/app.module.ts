import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { BrowserModule } from "@angular/platform-browser";
import { BookComponent } from './book/book.component';
import { BooksService } from "./books/books.service";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { routes } from "./app.routes";
import { CommonModule } from "@angular/common";
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, NavbarComponent, BooksComponent, BookComponent, AboutComponent, AddComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule, CommonModule, ReactiveFormsModule],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }