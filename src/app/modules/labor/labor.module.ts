import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandejaComponent } from './bandeja/bandeja.component';
import { RegistrarLaborComponent } from './registrar-labor/registrar-labor.component';
import { ModificarLaborComponent } from './modificar-labor/modificar-labor.component';
import { Route, RouterModule } from '@angular/router'; 
import { SharedModule } from 'app/shared/shared.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { EliminarLaborComponent } from './eliminar-labor/eliminar-labor.component';
import { MatPaginatorImpl } from 'app/shared/mat-paginator';
import { MaterialModule } from 'app/shared/material/material.module';


const laborRoutes: Route[] = [
  {
    path: '',
    component: BandejaComponent
  }
];

@NgModule({
  declarations: [
    BandejaComponent,
    RegistrarLaborComponent,
    ModificarLaborComponent,
    EliminarLaborComponent,  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(laborRoutes),
    MaterialModule,
    SharedModule,   
  ],
  providers:[
    { provide: MatPaginatorIntl, useClass: MatPaginatorImpl },
  ]
})
export class LaborModule { }
