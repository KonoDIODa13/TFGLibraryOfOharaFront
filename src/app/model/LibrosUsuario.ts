import { Libro } from "./Libro";
import { Usuario } from "./Usuario";

export class LibrosUsuario {
  constructor(
    public usuario: Usuario,
    public libro: Libro,
    public fecha_inicio: Date,
    public estado: string,
    public id?: number,
  ) { }
}
