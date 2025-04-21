import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { RegisterComponent } from './pages/init/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/init/login/login.component';
import { InitComponent } from './pages/init/init.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
