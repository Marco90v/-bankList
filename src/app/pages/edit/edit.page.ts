import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: '../nuevo/nuevo.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  datosBanco = {alias: '', banco: '', usuarioWeb: '', claveWeb: ''};
  cuentas: any[] = Array(0);
  tarjetas: any[] = Array(0);
  id: number;
  encabezado = 'Edición';

  constructor(private ruta: ActivatedRoute,
              private dataServices: ServicioService,
              private alertController: AlertController,
              private router: Router) {
  }

  ionViewWillLeave(){}

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.ruta.snapshot.paramMap.get('id'));
    const datos = this.dataServices.getBanco(this.id);
    this.datosBanco = datos.datosBanco;
    this.cuentas = datos.cuentas;
    this.tarjetas = datos.tarjetas;
  }

  async guardar(){
    if (this.datosBanco.alias === 'undefined' || this.datosBanco.alias === ''){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Guardar',
        subHeader: 'Nuevos datos Bancarios',
        message: 'El campo Alias es obligatorio',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      this.dataServices.actualizarDatos({datosBanco: this.datosBanco, cuentas: this.cuentas, tarjetas: this.tarjetas}, this.id);
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
