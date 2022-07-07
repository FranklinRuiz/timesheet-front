import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Route, RouterModule } from '@angular/router';
import { GraficosComponent } from './graficos.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from 'app/shared/material/material.module';
import { FiltroReporteComponent } from './filtro-reporte/filtro-reporte.component';
import { SharedModule } from 'app/shared/shared.module';


const graficosRoutes: Route[] = [
  {
    path: 'graficos',
    component: GraficosComponent
  },
  {
    path : '**',
    redirectTo : 'graficos'
  }
];
 
@NgModule({
  declarations: [
    GraficosComponent, 
    FiltroReporteComponent
  ],
  imports: [
    CommonModule, 
    NgChartsModule,
    MaterialModule,
    RouterModule.forChild(graficosRoutes),
    SharedModule
  ],
 
})
export class GraficosModule { }
