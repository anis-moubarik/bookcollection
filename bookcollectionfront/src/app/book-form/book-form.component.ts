import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent{

  protected bookForm: FormGroup;
  protected error: any;
  protected success: any;

  @ViewChild('successAlert', { static: false })
  successAlert: NgbAlert | undefined;

  constructor(private bookService: BookService) {
    this.bookForm = new FormGroup({
      author: new FormControl('', [
        Validators.required,
      ]),
      title: new FormControl('', [
        Validators.required,
      ])
    });
  }

  get title() { return this.bookForm.get('title'); }

  get author() { return this.bookForm.get('author'); }

  onSubmit() {
    this.bookService.saveBook(this.bookForm.value).subscribe({
      next: (data) => {
        this.success = data;
        this.bookService.sendClickEvent();
        //Add timeout to close status message
        setTimeout(() => {
          this.successAlert?.close();
          this.success = '';
        }, 2500);
      },
      error: (err) => {
        this.error = err.error.messages;
      },
      complete: () => {
        this.bookForm.reset();
      }
    });
  }
}
