import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LibraryComponent } from './library/library.component';
import { HomeRoutingModule } from './home-routing.module';
import { UserBookComponent } from './userBook/userBook.component';
import { BookDetailComponent } from './bookDetail/bookDetail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LibraryComponent,
    UserBookComponent,
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    FormsModule,
  ],
  exports: [
  ]
})
export class HomeModule { }
