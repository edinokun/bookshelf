import { Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { AboutComponent } from "./about/about.component";
import { AddComponent } from "./add/add.component";

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: BooksComponent },
    { path: 'about', component: AboutComponent },
    { path: 'add', component: AddComponent },
];