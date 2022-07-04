import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { DonaComponent } from './dona/dona.component';
import { LinealComponent } from './lineal/lineal.component';
import { Route, RouterModule } from '@angular/router';
import { GraficosComponent } from './graficos.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from 'app/shared/material/material.module';
import { FiltroReporteComponent } from './filtro-reporte/filtro-reporte.component';
import { SharedModule } from 'app/shared/shared.module';


const graficosRoutes: Route[] = [
  {
    path: 'graficos',
    component: GraficosComponent,
    children : [
      {
        path: 'dona', 
        component: DonaComponent,
      },
      {
        path: 'barra', 
        component: BarraComponent,
      },
      {
        path: 'lineal', 
        component: LinealComponent,
      },
    ]
  },
  {
    path : '**',
    redirectTo : 'graficos'
  }
];
 
@NgModule({
  declarations: [
    GraficosComponent,
    DonaComponent,
    BarraComponent,
    LinealComponent,
    FiltroReporteComponent
  ],
  imports: [
    CommonModule, 
    NgChartsModule,
    MaterialModule,
    RouterModule.forChild(graficosRoutes),
    SharedModule
  ],
  exports : [
    DonaComponent,
    BarraComponent,
    LinealComponent, 
  ]
})
export class GraficosModule { }
