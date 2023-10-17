import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRootComponent } from './books-root.component';
import {RouterOutlet} from '@angular/router';
import {BookFormComponent} from '../book-form/book-form.component';
import {BookListComponent} from '../book-list/book-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {BookService} from '../services/book.service';
import {ScrollingModule} from '@angular/cdk/scrolling';

describe('BookRootComponent', () => {
  let component: BooksRootComponent;
  let fixture: ComponentFixture<BooksRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BooksRootComponent,
        BooksRootComponent,
        BookFormComponent,
        BookListComponent
      ],
      imports: [ScrollingModule],
      providers: [{provide: HttpClient}, {provide: HttpHandler}]
    });
    fixture = TestBed.createComponent(BooksRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
