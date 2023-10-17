import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormComponent } from './book-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookFormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
