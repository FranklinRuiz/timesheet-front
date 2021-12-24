/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EliminarLaborComponent } from '../eliminar-labor/eliminar-labor.component';
import { ILabor, LaboresPage } from '../interface/labor.interface';
import { RegistrarLaborComponent } from '../registrar-labor/registrar-labor.component';
import { LaborService } from '../services/labor.service';

@Component({
  selector: 'labor-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: ['./bandeja.component.scss']
})
export class BandejaComponent implements OnInit {

  displayedColumnsLabor: string[] = ['id', 'nombre', 'block', 'nivel', 'fase', 't_labor', 'accion'];
  dataSourceLabor: any[];

  tablaLaborPage: LaboresPage;

  nombreLabor: string = '';
  pagina: number = 0;
  size: number = 10;

  constructor(
    public dialog: MatDialog,
    private apiService: LaborService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.onLoadTableLabor();
  }

  onAddLabor() {
    const dialogRef = this.dialog.open(RegistrarLaborComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableLabor();
      }
    });
  }

  onLoadTableLabor() {
    this.apiService.getLaborPaginado(this.pagina, this.size).subscribe((resp) => {
      if (resp) {
        this.tablaLaborPage = resp;
      }
    });
  }

  onChangePagination(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.size = event.pageSize;

    this.apiService.getLaborPaginado(this.pagina, this.size).subscribe((resp) => {
      this.tablaLaborPage = resp;
    });
  }

  onNombreLike() {
    this.apiService.getLaborPaginadoLike(this.pagina, this.size, this.nombreLabor).subscribe((resp) => {
      this.tablaLaborPage = resp;
    });
  }

  onRefresh() {
    this.nombreLabor = '';
    this.onLoadTableLabor();
  }

  onEditLabor(labor: ILabor) {
    console.log(labor);
    const dialogRef = this.dialog.open(RegistrarLaborComponent, {
      width: '800px',
      data: labor
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableLabor();
      }
    });
  }

  onDetalle(id) {
    this.router.navigate(['/labor/medicion/', id]);
  }

  onDeleteLabor(idLabor: number) {
    const dialogRef = this.dialog.open(EliminarLaborComponent, {
      width: '300px',
      data: idLabor
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.deleteLabor(result).subscribe((resp) => {
          this.onLoadTableLabor();
        });
      }
    });
  }

  openFileCad(ruta: string) {
    if (!!ruta) {
      window.location.href = 'cad:open/' + ruta.replace(new RegExp('\\\\', 'g'), '/');;
    } else {
      this.matSnackBar.open(
        'Ruta archivo no valido.',
        'Cerrar',
        { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
      );
    }
  }

}
