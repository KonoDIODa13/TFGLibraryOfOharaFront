import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Libro } from '../../../model/Libro';
import { ActivatedRoute } from '@angular/router';
import { LibraryOfOharaService } from '../../../service/library-of-ohara.service';
import { Usuario } from '../../../model/Usuario';
import { LibrosUsuario } from '../../../model/LibrosUsuario';
import { Estado } from '../../../model/Estado';
import { log } from 'node:console';

@Component({
  selector: 'book-detail',
  templateUrl: './bookDetail.component.html',
  styleUrl: './bookDetail.component.css',
  standalone: false
})
export class BookDetailComponent implements OnInit {

  libro?: Libro;
  libroUsuario?: LibrosUsuario

  estado: Estado = Estado.SIN_EMPEZAR
  estados = Object.keys(Estado).filter(key => isNaN(Number(key)));;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private service: LibraryOfOharaService
  ) { }


  ngOnInit(): void {
    const idUsuario = JSON.parse(sessionStorage.getItem('usuario')!).id
    const idLibro = Number(this.route.snapshot.paramMap.get('id'));
    this.getLibroUsuario(idUsuario, idLibro)
    this.getLibro(idLibro)
  }

  volver() {
    this.location.back()
  }



  annadirLista() {
    const usuario: Usuario = JSON.parse(sessionStorage.getItem('usuario')!)
    this.service.annadirLibroUsuario(usuario.id!, this.libro!.id!).subscribe({
      next: () => {
        alert("Libro añadido con exito.")
        this.getLibroUsuario(usuario.id!, this.libro!.id!)
      },
      error: () => {
        alert("error al añadir el libro.")
      }
    })
  }

  eliminarLista() {
    const idUsuario = JSON.parse(sessionStorage.getItem('usuario')!).id
    this.service.borrarLibroUsuario(idUsuario, this.libro!.id!).subscribe({
      next: () => {
        alert("Libro eliminado con exito.")

        this.getLibroUsuario(idUsuario, this.libro!.id!)
        console.log(this.libroUsuario)
      },
      error: (err) => {
        alert("error al eliminar el libro.")
        console.log(err)
      }
    })
  }


  getLibroUsuario(idUsuario: number, idLibro: number) {
    this.service.compruebaExisteLibroUsuario(idUsuario, idLibro)
      .subscribe(librosUsuario => {
        this.libroUsuario = librosUsuario
        if (this.libroUsuario) {
          this.estado = this.parseEstado(this.libroUsuario.estado)
        }
      })

  }

  getLibro(idLibro: number) {
    this.service.getLibroByID(idLibro).subscribe(libro => {
      this.libro = libro
    })
  }

  modificarEstado() {
    console.log(this.estado);
    console.log(this.libroUsuario?.id)

    this.service.modificarEstadoLibro(this.libroUsuario!.id!, this.estado).subscribe(
      (respuesta) => {
        alert("Estado del libro modificado.")
        this.libroUsuario =respuesta
    })
    this.estado= Estado.SIN_EMPEZAR;

  }

  parseEstado(est: string): Estado {
    var estadoADevolver = Estado.SIN_EMPEZAR
    switch (est) {
      case "SIN_EMPEZAR":
        estadoADevolver = Estado.SIN_EMPEZAR
        break;
      case "LEYENDO":
        estadoADevolver = Estado.LEYENDO
        break;
      case "PAUSADO":
        estadoADevolver = Estado.PAUSADO
        break;
      case "ACABADO":
        estadoADevolver = Estado.ACABADO
        break;
      case "DEJADO":
        estadoADevolver = Estado.DEJADO
        break;
    }
    return estadoADevolver
  }
}
