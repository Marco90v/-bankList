import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  datos: any[] = Array(0);

  constructor() {}

  setStorage(datos?: any){
    if (this.datos === null){this.datos = []; }
    if (datos){this.datos.push(datos); }
    localStorage.setItem('usuario', JSON.stringify(this.datos));
  }

  getStorage(): any{
    return this.datos.length === 0 ? this.datos = JSON.parse(localStorage.getItem('usuario')) :  this.datos;
  }

  editData(desde: number, to: number){
    const itemMover = this.datos.splice(desde, 1)[0];
    this.datos.splice(to, 0, itemMover);
    this.setStorage();
  }

  borrar(item: number){
    this.datos.splice(item, 1);
    this.setStorage();
  }

  getBanco(item: number){
    return this.datos[item];
  }

  actualizarDatos(banco: any, item: number){
    this.datos[item] = banco;
    this.setStorage();
  }


}
