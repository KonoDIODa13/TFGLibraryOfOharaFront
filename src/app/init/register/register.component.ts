import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  public registerForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl(''),
    contrasenna:new FormControl('',Validators.required),
    gmail: new FormControl('',Validators.required),

    //email: new FormControl('', [Validators.required, Validators.email])
  });


  enviar() {
    console.log(this.registerForm.value);
  }
}
