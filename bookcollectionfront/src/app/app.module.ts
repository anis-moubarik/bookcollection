import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksRootComponent } from './books-root/books-root.component';
import { RouterOutlet } from '@angular/router';
import { CustomdatePipe } from './pipes/customdate.pipe';
import { DatePipe } from '@angular/common';
import { ScrollingModule as ScrollingModuleExperimental } from '@angular/cdk-experimental/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BookFormComponent } from './book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BooksRootComponent,
    CustomdatePipe,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterOutlet,
    ScrollingModule,
    ScrollingModuleExperimental,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
