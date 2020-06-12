import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  actionHuella: string;

  constructor(private huella: FingerprintAIO, private router: Router) {}

  ngOnInit(){
    this.activarHuella();
  }

  activarHuella(){
    this.huella.show({
      title: 'Verificacion de Usuario',
      description: 'Ingrese huella dactilar',
      disableBackup: false
    })
    .then((result: any) => {this.actionHuella = 'huellaSuccess'; this.router.navigate(['/lista']); })
    .catch((error: any) => this.actionHuella = 'huellaError');
  }

}
