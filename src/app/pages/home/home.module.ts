import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LibraryComponent } from './library/library.component';
import { HomeRoutingModule } from './home-routing.module';
import { BookComponent } from './book/book.component';
import { UserBookComponent } from './userBook/userBook.component';
import { BookDetailComponent } from './bookDetail/bookDetail.component';



@NgModule({
  declarations: [
    HomeComponent,
    LibraryComponent,
    BookComponent,
    UserBookComponent,
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
  ],
  exports: [
  ]
})
export class HomeModule { }
