import { Component } from '@angular/core';

@Component({
  selector: 'init',
  standalone: false,
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

  mostrarFormularioInicioSesion: boolean = true;

  mostrarFormulario(){

    this.mostrarFormularioInicioSesion = !this.mostrarFormularioInicioSesion;

  }


}
