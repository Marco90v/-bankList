import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPageRoutingModule } from './nuevo-routing.module';

import { NuevoPage } from './nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPageRoutingModule
  ],
  declarations: [NuevoPage]
})
export class NuevoPageModule {}
