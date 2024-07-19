import { Component, Input } from '@angular/core';
import { Book } from 'src/domain/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book!: Book;
}
