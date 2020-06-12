import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  lista: any[] = [];
  datos: any[] = [];

  constructor(private dataServices: ServicioService, private plataforma: Platform, private ruta: Router) {
    this.plataforma.backButton.subscribeWithPriority(666666, () => {
      if (ruta.url === '/lista'){
        navigator['app'].exitApp();
      }else{
        ruta.navigate(['/lista']);
      }
    });
  }

  ionViewWillEnter(){
    this.cargar();
  }

  ngOnInit() {}

  doReorder(event){
    this.lista = event.detail.complete(this.lista);
    this.dataServices.editData(event.detail.from, event.detail.to);
  }

  borrar(item: number){
    this.lista.splice(item, 1);
    this.dataServices.borrar(item);
  }

  cargar(){
    const res = this.dataServices.getStorage();
    this.lista = res === null ? [] : res.map(e => e.datosBanco.alias);
  }


}
