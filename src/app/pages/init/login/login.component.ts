import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../model/Usuario';
import { LibraryOfOharaService } from '../../../service/library-of-ohara.service';
import { Router } from '@angular/router';

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
      next: response => {
        const authHeader = response.headers.get('Authorization');
        if (authHeader) {
          this.usuario = response.body!;
          sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
          sessionStorage.setItem('token', authHeader);
          this.router.navigate(['/home']);
        } else {
          alert("No se recibió token de autenticación.");
        }
      },
      error: () => {
        alert("Credenciales inválidas.");
      }
    });
  }
}
