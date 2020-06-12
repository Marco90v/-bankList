import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit{

  datosBanco = {alias: '', banco: '', usuarioWeb: '', claveWeb: ''};
  cuentas: any[] = Array(0);
  tarjetas: any[] = Array(0);
  encabezado = 'Nuevo';

  constructor(private dataServices: ServicioService,
              private alertController: AlertController,
              private router: Router) {
  }

  ngOnInit() {}

  async guardar(){
    if (this.datosBanco.alias === 'undefined' || this.datosBanco.alias === ''){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Guardar',
        subHeader: 'Nuevos datos Bancarios',
        message: 'El campo "Alias" es obligatorio',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      this.dataServices.setStorage({datosBanco: this.datosBanco, cuentas: this.cuentas, tarjetas: this.tarjetas});
      this.router.navigate(['/lista']);
    }
  }

  addTarjeta(){
    this.tarjetas.push({});
  }

  addCuenta(){
    this.cuentas.push({});
  }

  borrarTarjeta(item: number){
    this.tarjetas.splice(item, 1);
  }

  borrarCuenta(item: number){
    this.cuentas.splice(item, 1);
  }

}
