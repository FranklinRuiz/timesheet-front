import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { GeneralPage } from 'app/shared/interface-paginator';
import { Personal } from '../interface/personal';
import { RegistroPersonalComponent } from '../registro-personal/registro-personal.component';
import { PersonalService } from '../service/personal-service.service';

@Component({
  selector: 'app-bandeja-personal',
  templateUrl: './bandeja-personal.component.html',
  styleUrls: ['./bandeja-personal.component.scss']
})
export class BandejaPersonalComponent implements OnInit {


  displayedColumns: string[] = ['nombreCompleto', 'cargo','horario','telefono', 'accion'];
  dataSource: any[];

  tablaPersonal: GeneralPage;

  nombreCargo: string = '';
  pagina: number = 0;
  size: number = 10;

  constructor(
    public dialog: MatDialog,
    private apiService: PersonalService,
    private _fuseConfirmationService: FuseConfirmationService
  ) { }

  ngOnInit(): void {
    this.onLoadTable();
  }

  onRefresh() {
    this.nombreCargo = '';
    this.onLoadTable();
  }

  onAdd() {
    const dialogRef = this.dialog.open(RegistroPersonalComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTable();
      }
    });
  }

  onLoadTable() {
    this.apiService.listPersonal(this.pagina, this.size, this.nombreCargo).subscribe((resp: any) => {
      if (resp) {
        this.tablaPersonal = resp.data;
      }
    });
  }

  onChangePagination(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.size = event.pageSize;

    this.apiService.listPersonal(this.pagina, this.size, this.nombreCargo).subscribe((resp: any) => {
      this.tablaPersonal = resp.data;
    });
  }


  onEdit(data: Personal) {
    const dialogRef = this.dialog.open(RegistroPersonalComponent, {
      width: '500px',
      data: data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTable();
      }
    });
  }

  onDelete(idCargo: number) {
    const dialogRef = this._fuseConfirmationService.delete();

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'confirmed') {
        this.apiService.deletePersonal(idCargo).subscribe((resp) => {
          this.onLoadTable();
        });
      }
    });
  }
}
