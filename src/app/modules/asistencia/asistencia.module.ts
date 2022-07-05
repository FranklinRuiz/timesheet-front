import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandejaAsistenciaComponent } from './bandeja-asistencia/bandeja-asistencia.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from 'app/shared/material/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatPaginatorImpl } from 'app/shared/mat-paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';

const horarioRoutes: Route[] = [
  {
    path: '',
    component: BandejaAsistenciaComponent
  }
];

@NgModule({
  declarations: [
    BandejaAsistenciaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(horarioRoutes),
    MaterialModule,
    SharedModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorImpl },
  ]
})
export class AsistenciaModule { }
