import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    contrasenna:new FormControl('',Validators.required)
  });


  enviar() {
    console.log(this.loginForm.value);
  }
}
