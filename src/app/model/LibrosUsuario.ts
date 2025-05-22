import { Libro } from "./Libro";
import { Usuario } from "./Usuario";

export class LibrosUsuario {
  constructor(
    public usuario: Usuario,
    public libro: Libro,
    public fechaInicio: Date,
    public estado: string,
    public id?: number,
  ) { }
}
