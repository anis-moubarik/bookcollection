import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BooksRootComponent } from './books-root/books-root.component';
import { By } from '@angular/platform-browser';
import {BookFormComponent} from './book-form/book-form.component';
import {BookListComponent} from './book-list/book-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';


let fixture: ComponentFixture<AppComponent>;
describe('AppComponent', () => {
  beforeEach(waitForAsync( () => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      BooksRootComponent,
      BookFormComponent,
      BookListComponent
    ],
    imports: [ScrollingModule],
    providers: [{provide: HttpClient}, {provide: HttpHandler}]
  })));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bookcollectionfront'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bookcollectionfront');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('title'));
    expect(compiled.nativeElement.innerHTML).toContain('Books');
  });
});
