import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandejaPersonalComponent } from './bandeja-personal/bandeja-personal.component';
import { RegistroPersonalComponent } from './registro-personal/registro-personal.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from 'app/shared/material/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorImpl } from 'app/shared/mat-paginator';

const personalRoutes: Route[] = [
  {
    path: '',
    component: BandejaPersonalComponent
  }
];

@NgModule({
  declarations: [
    BandejaPersonalComponent,
    RegistroPersonalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(personalRoutes),
    MaterialModule,
    SharedModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorImpl },
  ]
})
export class PersonalModule { }
