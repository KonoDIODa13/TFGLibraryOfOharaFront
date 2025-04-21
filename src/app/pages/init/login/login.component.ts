import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../shared/model/Usuario';
import { LibraryOfOharaService } from '../../../shared/library-of-ohara.service';
import { AuthService } from '../../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'init-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario?: Usuario

  constructor(private autenticacion:AuthService,
     private service: LibraryOfOharaService,
    private router:Router) { }

  public loginForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    contrasenna: new FormControl('', Validators.required)
  });


  enviar() {
    const nombre = this.loginForm.value.nombre!
    const contra = this.loginForm.value.contrasenna!
    this.service.login(nombre, contra).subscribe({
      next: (data) => {
        console.log(data)
        this.usuario = data
        this.autenticacion.setUsuario(this.usuario);
        this.router.navigate(['/home']);

      },
      error: (error) => {
        console.error('Error al obtener usuarios', error)
      }
    })
  }
}
