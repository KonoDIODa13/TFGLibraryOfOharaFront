import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BookComponent } from "./pages/book/book.component";
import { UserBookComponent } from "./pages/userBook/userBook.component";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
@NgModule({
  declarations: [
    BookComponent,
    UserBookComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookComponent,
    UserBookComponent,
  ]
})

export class SharedModule { }
