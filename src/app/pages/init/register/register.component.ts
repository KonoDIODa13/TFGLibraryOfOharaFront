import { Usuario } from './../../../shared/model/Usuario';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibraryOfOharaService } from '../../../shared/service/library-of-ohara.service';
import { Router } from '@angular/router';


@Component({
  selector: 'init-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  usuario?: Usuario
  constructor(private service: LibraryOfOharaService,
    private router: Router) { }


  public registerForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    contrasenna: new FormControl('', Validators.required),
    gmail: new FormControl('', [Validators.required, Validators.email]),
  });


  enviar() {
    console.log(this.registerForm.value);

    const nombre = this.registerForm.value.nombre!
    const apellidos = this.registerForm.value.apellidos!
    const contra = this.registerForm.value.contrasenna!
    const gmail = this.registerForm.value.gmail!

    const user: Usuario = new Usuario(nombre, apellidos, contra, gmail, "USER")
    this.service.register(user).subscribe({
      next: (data) => {
        this.usuario = data
        sessionStorage.setItem('usuario', JSON.stringify(this.usuario))
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error al insertar Usuario', error)
      }
    })
    if (this.usuario != null) {
      this.service.getToken(this.usuario).subscribe({
        next: (response) => {
          const token = response.headers.get('Authorization');
          sessionStorage.setItem('token', token!)
          this.router.navigate(['/home']);
        }
      })
    }
  }
}
