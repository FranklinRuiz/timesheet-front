import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedeRoutingModule } from './sede-routing.module';
import { Route, RouterModule } from '@angular/router';
import { BandejaSedesComponent } from './bandeja-sedes/bandeja-sedes.component';
import { RegistroSedeComponent } from './registro-sede/registro-sede.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorImpl } from 'app/shared/mat-paginator';
import { SharedModule } from 'app/shared/shared.module';

const sedeRoutes : Route[] = [
  {
    path: '',
    component: BandejaSedesComponent
  }
]
@NgModule({
  declarations: [
    BandejaSedesComponent,
    RegistroSedeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(sedeRoutes),
    MaterialModule,
    SharedModule,
  ],
  providers:[
    { provide: MatPaginatorIntl, useClass: MatPaginatorImpl },
  ]
})
export class SedeModule { }
