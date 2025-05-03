import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { Libro } from '../model/Libro';
import { Autor } from '../model/Autor';
import { Genero } from '../model/Genero';
import { LibrosUsuario } from '../model/LibrosUsuario';


@Injectable({
  providedIn: 'root'
})
export class LibraryOfOharaService {

  private url = "http://localhost:9999/api/";

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url + "usuario/todos")
  }

  public login(nombre: string, contra: string): Observable<Usuario> {
    const newUrl = this.url + "usuario/login?nombreUsuario=" + nombre + "&contrasenna=" + contra
    return this.http.get<Usuario>(newUrl)
  }

  public register(usuario: Usuario): Observable<Usuario> {
    const newUrl = this.url + "usuario/registrar"
    return this.http.post<Usuario>(newUrl, usuario)
  }

  public getToken(usuario: Usuario): Observable<HttpResponse<Usuario>> {
    const newUrl = this.url + "usuario/token"
    return this.http.post<Usuario>(newUrl, usuario, {
      observe: 'response'  // Para poder leer las cabeceras
    });
  }

  public getLibros(): Observable<Libro[]> {
    const newUrl = this.url + "libro/todos"
    return this.http.get<Libro[]>(newUrl)
  }

  public getAutores(): Observable<Autor[]> {
    const newUrl = this.url + "autor/todos"
    return this.http.get<Autor[]>(newUrl)
  }

  public getGeneros(): Observable<Genero[]> {
    const newUrl = this.url + "genero/todos"
    return this.http.get<Genero[]>(newUrl)
  }

  public getLibrosByUsuario(idUsuario: number): Observable<LibrosUsuario[]> {
    const newUrl = `${this.url}usuario/${idUsuario}/libros`
    return this.http.get<LibrosUsuario[]>(newUrl)
  }
}
