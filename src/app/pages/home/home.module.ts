import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LibraryComponent } from './library/library.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    LibraryComponent,
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
