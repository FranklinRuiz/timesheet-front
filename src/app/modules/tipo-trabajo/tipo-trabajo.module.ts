import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoTrabajoRoutingModule } from './tipo-trabajo-routing.module';
import { BandejaTipoTrabajoComponent } from './bandeja-tipo-trabajo/bandeja-tipo-trabajo.component';
import { RegistroTipoTrabajoComponent } from './registro-tipo-trabajo/registro-tipo-trabajo.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    BandejaTipoTrabajoComponent,
    RegistroTipoTrabajoComponent
  ],
  imports: [
    CommonModule,
    TipoTrabajoRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class TipoTrabajoModule { }
