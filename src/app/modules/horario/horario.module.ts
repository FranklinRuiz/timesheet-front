import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandejaHorarioComponent } from './bandeja-horario/bandeja-horario.component';
import { RegistroHorarioComponent } from './registro-horario/registro-horario.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from 'app/shared/material/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorImpl } from 'app/shared/mat-paginator';

const horarioRoutes: Route[] = [
  {
    path: '',
    component: BandejaHorarioComponent
  }
];

@NgModule({
  declarations: [
    BandejaHorarioComponent,
    RegistroHorarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(horarioRoutes),
    MaterialModule,
    SharedModule,  
  ],
  providers:[
    { provide: MatPaginatorIntl, useClass: MatPaginatorImpl },
  ]
})
export class HorarioModule { }
