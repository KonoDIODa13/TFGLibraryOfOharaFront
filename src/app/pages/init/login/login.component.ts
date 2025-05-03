import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../shared/model/Usuario';
import { LibraryOfOharaService } from '../../../shared/service/library-of-ohara.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'init-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario?: Usuario

  constructor(private service: LibraryOfOharaService,
    private router: Router) { }

  public loginForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    contrasenna: new FormControl('', Validators.required)
  });


  enviar() {
    const nombre = this.loginForm.value.nombre!
    const contra = this.loginForm.value.contrasenna!
    this.service.login(nombre, contra).subscribe({
      next: (data) => {
        sessionStorage.setItem('usuario', JSON.stringify(data))
      },
      error: (error) => {
        console.error('Error al realizar login', error)
      }
    })
    this.getToken()
  }

  getToken() {
    const usuarioSTR = sessionStorage.getItem('usuario')
      this.usuario = JSON.parse(usuarioSTR!)
    if (this.usuario) {
      this.service.getToken(this.usuario).subscribe(
        response => {
          const token = response.headers.get('Authorization');
          if (token) {
            sessionStorage.setItem('token', token)
            this.router.navigate(['/home']);
          }
        }
      )
    }
  }
}
