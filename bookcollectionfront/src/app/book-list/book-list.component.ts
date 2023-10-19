import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { catchError, Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  protected books!: Book[];
  protected isLoading = true;
  protected limit = 20;
  protected offset = 0;
  protected error: any;
  protected clickEventsubscription: Subscription | undefined;


  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.refreshBooks(true);
    this.clickEventsubscription = this.bookService.getClickEvent().subscribe(()=> {
      this.refreshBooks(false);
    });
  }

  /**
   * Adds books to our books array
   * @param initial, tells us if it's the 1st load
   * @private
   */
  private refreshBooks(initial: boolean) {
      //if it's not the first load, query just the 1 added book
      let queryParams = new Map<string, number>()
        .set('limit', initial ? this.limit : 1)
        .set('offset', initial ? this.offset : 0);
      this.bookService.getBooks(queryParams).subscribe({
        next: (data) => {
          if (this.books === undefined) {
            this.books = data;
          } else {
            this.books = [...data, ...this.books];
          }
          //increase offset accordingly
          this.offset = initial ? this.offset + 20 : this.offset;
        },
        error: (err) => {
          this.error = err.error.messages;
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

  /**
   * Infinite scroll event handler, updates with new books from the API when we get
   * to the last 10 of our current items
   * @param e: scrollIndex
   * @protected
   */
  protected scrollIndexEnd(e: number) {
    if (this.books && (e >= (this.books.length - 10))) {
      this.isLoading = true;
      let queryParams = new Map<string, number>()
        .set('limit', this.limit)
        .set('offset', this.offset);
      this.bookService.getBooks(queryParams).pipe(
        catchError(() => []),
      ).subscribe({
        next: (data) => {
          this.books = [...this.books, ...data];
          this.offset += 20;
        },
        error: (err) => {
          this.error = err.error.messages;
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }


}
