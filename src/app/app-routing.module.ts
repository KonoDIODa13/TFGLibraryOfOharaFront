import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './pages/init/init.component';
import { LoginComponent } from './pages/init/login/login.component';
import { RegisterComponent } from './pages/init/register/register.component';

const routes: Routes = [
  {
    path: 'init',
    component: InitComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    loadChildren: () => import("./pages/home/home.module").then(h => h.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'init'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
