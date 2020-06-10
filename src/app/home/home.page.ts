import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';
// import { TouchID } from '@ionic-native/touch-id/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // private huella: FingerprintAIO
  // private huella: TouchID
  constructor(private huella: FingerprintAIO, private router: Router) {}

  ngOnInit(){
    this.huella.show({
      title: 'Verificacion de Usuario',
      description: 'Para ingresar ingrese huella dactilar',
      disableBackup: true
    })
    .then((result: any) => this.router.navigate(['/lista']))
    .catch((error: any) => console.log(error));


    // this.huella.verifyFingerprint('Escaneo de huella').then(e => console.log(e)).catch(e => console.log(e));
  }

}
