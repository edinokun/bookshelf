import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book/book';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import { addBook } from '../state/books.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const book: Book = {
        id: uuid.v4(),
        volumeInfo: {
          title: this.bookForm.value.title,
          authors: [this.bookForm.value.author]
        }
      }

      this.store.dispatch(addBook({ book }));
    }
  }
}
