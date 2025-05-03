import { Component, OnInit } from '@angular/core';
import { LibraryOfOharaService } from '../../shared/service/library-of-ohara.service';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/model/Usuario';
import { LibrosUsuario } from '../../shared/model/LibrosUsuario';

@Component({
  selector: 'home-page-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  usuario?: Usuario;
  librosUsuario?: LibrosUsuario[]

  mostrarSideBar: Boolean = false;
  mostrarLibreria: Boolean = false;
  mostrarLibros: Boolean = false;


  constructor(
    private service: LibraryOfOharaService,
    private router: Router) { }


  ngOnInit(): void {
    const usuarioSTR = sessionStorage.getItem('usuario')!
    if (usuarioSTR) {
      this.usuario = JSON.parse(usuarioSTR);
    }
    this.service.getLibrosByUsuario(this.usuario!.id!).subscribe({
      next: (data) => {
        console.log(data)
        this.librosUsuario = data;
      }
    })
  }

  deslogear(): void {
    sessionStorage.setItem('usuario', JSON.stringify(null))
    sessionStorage.setItem('token', '')
    this.router.navigate(['/init']);
  }

  controladorSideBar() {
    this.mostrarSideBar = !this.mostrarSideBar
  }

  controladorLibreria() {
    this.mostrarLibreria = !this.mostrarLibreria
    this.mostrarLibros = false
  }

  controladorLibros() {
    this.mostrarLibros = !this.mostrarLibros
    this.mostrarLibreria = false
  }

}

