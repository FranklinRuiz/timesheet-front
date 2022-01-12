import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalDeleteComponent } from 'app/shared/modal-delete/modal-delete.component';
import { CargoPage, ICargo } from '../interface/cargo.interface';
import { RegistroCargoComponent } from '../registro-cargo/registro-cargo.component';
import { CargoService } from '../service/service-cargo.service';

@Component({
  selector: 'app-bandeja-cargo',
  templateUrl: './bandeja-cargo.component.html',
  styleUrls: ['./bandeja-cargo.component.scss']
})
export class BandejaCargoComponent implements OnInit {

  displayedColumnsCargo: string[] = ['codigoCargo', 'nombreCargo', 'accion'];
  dataSourceCargo: any[];

  tableCargo: CargoPage;

  pagina: number = 0;
  size: number = 10;

  constructor(
    public dialog: MatDialog,
    private apiService: CargoService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.onLoadTableCargo();
  }

  onAddCargo() {
    const dialogRef = this.dialog.open(RegistroCargoComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableCargo();
      }
    });
  }

  onLoadTableCargo() {
    this.apiService.listCargo(this.pagina, this.size).subscribe((resp:any) => {
      if (resp) {
        this.tableCargo = resp.data;
      }
    });
  }

  onChangePagination(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.size = event.pageSize;

    this.apiService.listCargo(this.pagina, this.size).subscribe((resp:any) => {
      this.tableCargo = resp.data;
    });
  }


  onEditCargo(data: ICargo) {
    const dialogRef = this.dialog.open(RegistroCargoComponent, {
      width: '500px',
      data: data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableCargo();
      }
    });
  }

  onDeleteCargo(idCargo: number) {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: '400px',
      data: {
        title: 'Eliminar cargo registrado',
        message: '¿esta seguro de eliminar este cargo?'
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.deleteCargo(idCargo).subscribe((resp) => {
          this.onLoadTableCargo();
        });
      }
    });
  }

}
