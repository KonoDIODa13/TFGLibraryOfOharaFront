import { Component, OnInit } from '@angular/core';
import { LibraryOfOharaService } from '../../service/library-of-ohara.service';
import { Router } from '@angular/router';
import { Usuario } from '../../model/Usuario';
import { LibrosUsuario } from '../../model/LibrosUsuario';
import { Libro } from '../../model/Libro';

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
  mostrarbiblioteca: Boolean = false;
  mostrarLibros: Boolean = true;

  libros?: Libro[]


  constructor(
    private service: LibraryOfOharaService,
    private router: Router) { }


  ngOnInit(): void {
    const usuarioSTR = sessionStorage.getItem('usuario')!
    this.usuario = JSON.parse(usuarioSTR);
    console.log(this.usuario)
    this.getLibrosByUsuario()

  }


  deslogear(): void {
    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('token')
    this.router.navigate(['/init']);
  }

  controladorSideBar() {
    this.mostrarSideBar = !this.mostrarSideBar
  }

  controladorBiblioteca() {
    this.mostrarbiblioteca = !this.mostrarbiblioteca
    this.mostrarLibros = false
    this.getBiblioteca()
  }

  controladorLibros() {
    this.mostrarLibros = !this.mostrarLibros
    this.mostrarbiblioteca = false
    this.getLibrosByUsuario()
  }

  public getLibrosByUsuario() {
    this.service.getLibrosByUsuario(this.usuario!.id!).subscribe(librosUsuario => {
      this.librosUsuario = librosUsuario ?? [];
      console.log(this.librosUsuario)
    });
  }

  public getBiblioteca() {
    this.service.getLibros().subscribe({
      next: (data) => {
        this.libros = data;
      }
    })
  }

  public verLibro(libro: Libro) {
    console.log(libro)
    this.router.navigate(['home/libro', libro.id]);
  }

}

