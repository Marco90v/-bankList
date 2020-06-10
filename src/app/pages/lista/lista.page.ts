import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Platform } from '@ionic/angular';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  navigationSubscription;
  lista: any[] = [];
  datos: any[] = [];

  constructor(private dataServices: ServicioService, private plataforma: Platform, private ruta: Router) {
    this.navigationSubscription = ruta.events.pipe(
      // map((e: RouterEvent) => e instanceof NavigationEnd ? e.url === '/lista' ? console.log('ok') : false : false)
      map((e: RouterEvent) => {if (e instanceof NavigationEnd) {if (e.url === '/lista') { this.cargar(); } }})
    ).subscribe();


    this.plataforma.backButton.subscribeWithPriority(666666, () => {
      if (ruta.url === '/lista'){
        navigator['app'].exitApp();
      }else{
        ruta.navigate(['/lista']);
      }
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(){
    if (this.navigationSubscription){this.navigationSubscription.unsubscribe(); }
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
