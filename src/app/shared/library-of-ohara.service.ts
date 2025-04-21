import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LibraryOfOharaService {

  private url= "http://localhost:9999/api/";



  constructor(private http: HttpClient) { }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url+"usuario/todos");
  }

  public login(nombre:string, contra:string):Observable<Usuario>{
    //?nombreUsuario=jaime&contrasenna=1237012370
    const newUrl= this.url+"usuario/login?nombreUsuario="+nombre+"&contrasenna="+contra;
    return this.http.get<Usuario>(newUrl)
  }
}
