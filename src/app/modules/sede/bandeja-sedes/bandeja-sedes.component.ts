import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { GeneralPage } from 'app/shared/interface-paginator';
import { ISede } from '../interface/sede';
import { RegistroSedeComponent } from '../registro-sede/registro-sede.component';
import { SedeService } from '../service/sede.service';

@Component({
  selector: 'app-bandeja-sedes',
  templateUrl: './bandeja-sedes.component.html',
  styleUrls: ['./bandeja-sedes.component.scss']
})
export class BandejaSedesComponent implements OnInit {

  displayedColumnsSede: string[] = ['nombreSede', 'descripcion', 'direccion', 'beacon', 'accion'];
  dataSourceSede: any[];

  tableSede: GeneralPage;

  nombreSede: string = '';
  pagina: number = 0;
  size: number = 10;

  constructor(
    public dialog: MatDialog,
    private apiService: SedeService,
    private _fuseConfirmationService: FuseConfirmationService
  ) { }

  ngOnInit(): void {
    this.onLoadTableSede();
  }

  onRefresh() {
    this.nombreSede = '';
    this.onLoadTableSede();
  }

  onAddSede() {
    const dialogRef = this.dialog.open(RegistroSedeComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableSede();
      }
    });
  }

  onLoadTableSede() {
    this.apiService.listSede(this.pagina, this.size, this.nombreSede).subscribe((resp: any) => {
      if (resp) { 
        this.tableSede = resp.data;
      }
    });
  }

  onChangePagination(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.size = event.pageSize;

    this.apiService.listSede(this.pagina, this.size, this.nombreSede).subscribe((resp: any) => {
      this.tableSede = resp.data;
    });
  }


  onEditSede(data: ISede) {
    const dialogRef = this.dialog.open(RegistroSedeComponent, {
      width: '400px',
      data: data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableSede();
      }
    });
  }

  onDeleteSede(idSede: number) {
    const dialogRef = this._fuseConfirmationService.delete();

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'confirmed') {
        this.apiService.deleteSede(idSede).subscribe((resp) => {
          this.onLoadTableSede();
        });
      }
    });
  }
}
