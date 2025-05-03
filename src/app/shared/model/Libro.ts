import { Autor } from "./Autor";
import { Genero } from "./Genero";

export class Libro {
  constructor(
    public titulo: string,
    public sinopsis: string,
    public fecha_publicacion: Date,
    public genero: Genero,
    public autor: Autor,
    public portada: string,
    public id?: number,
  ) { }
}
