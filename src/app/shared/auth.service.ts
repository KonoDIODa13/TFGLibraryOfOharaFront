import { Injectable } from '@angular/core';
import { Usuario } from './model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario?: Usuario | null;

  setUsuario(usuario: Usuario) {
    this.usuario = usuario;
  }

  getUsuario() {
    return this.usuario;
  }

  deslogear() {
    this.usuario = null;
  }

}
