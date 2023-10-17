import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRootComponent } from './books-root.component';
import { BookFormComponent } from '../book-form/book-form.component';
import { BookListComponent } from '../book-list/book-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';

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
      imports: [ScrollingModule, ReactiveFormsModule],
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
