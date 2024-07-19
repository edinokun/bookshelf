import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      console.log('Form Submitted!', this.bookForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
