import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaTipoTrabajoComponent } from './bandeja-tipo-trabajo/bandeja-tipo-trabajo.component';

const routes: Routes = [
  {
    path: '',
    component: BandejaTipoTrabajoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoTrabajoRoutingModule { }
