export class Usuario {
  constructor(
    public nombre: string,
    public apellidos: string,
    public contrasenna: string,
    public gmail: string,
    public rol: string,
    public id?:number,
  ) {}
}
