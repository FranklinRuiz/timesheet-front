import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandejaDiaFestivoComponent } from './bandeja-dia-festivo/bandeja-dia-festivo.component';
import { RegistroDiaFestivoComponent } from './registro-dia-festivo/registro-dia-festivo.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorImpl } from 'app/shared/mat-paginator';


const diaFestivoRoutes: Route[] = [
  {
    path: '',
    component: BandejaDiaFestivoComponent
  }
];


@NgModule({
  declarations: [
    BandejaDiaFestivoComponent,
    RegistroDiaFestivoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(diaFestivoRoutes),
    MaterialModule,
    SharedModule, 
  ],
  providers:[
    { provide: MatPaginatorIntl, useClass: MatPaginatorImpl },
  ]
})
export class DiaFestivoModule { }
