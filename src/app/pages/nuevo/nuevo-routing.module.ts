import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPage } from './nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPageRoutingModule {}
