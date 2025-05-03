import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {

  usuario?: Usuario

  constructor(private service: LibraryOfOharaService,
    private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('usuario', "")
    sessionStorage.setItem('token', "")
  }

  public loginForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    contrasenna: new FormControl('', Validators.required)
  });


  enviar() {
    const nombre = this.loginForm.value.nombre!
    const contra = this.loginForm.value.contrasenna!
    this.service.login(nombre, contra).subscribe({
      next: (data) => {
        this.usuario = data;
        sessionStorage.setItem('usuario', JSON.stringify(this.usuario))
        this.getToken()
      },
      error: (error) => {
        console.error('Error al realizar login', error)
      }
    })
  }

  getToken() {
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
    } else {
      console.log("usuario es null")
      console.log(this.usuario)
    }
  }
}
