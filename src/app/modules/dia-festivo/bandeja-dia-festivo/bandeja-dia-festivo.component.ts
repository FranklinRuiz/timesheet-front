import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalDeleteComponent } from 'app/shared/modal-delete/modal-delete.component';
import { DiaFestivoPage, IDiaFestivo } from '../interface/dia-festivo';
import { RegistroDiaFestivoComponent } from '../registro-dia-festivo/registro-dia-festivo.component';
import { DiaFestivoService } from '../service/dia-festivo.service';

@Component({
  selector: 'app-bandeja-dia-festivo',
  templateUrl: './bandeja-dia-festivo.component.html',
  styleUrls: ['./bandeja-dia-festivo.component.scss']
})
export class BandejaDiaFestivoComponent implements OnInit {
  displayedColumnsDiaFestivo: string[] = ['idDiaFestivo', 'nombreDiaFestivo', 'fechaDiaFestivo', 'accion'];
  dataSourceDiaFestivo: any[];
  tableDiaFestivo: DiaFestivoPage;

  pagina: number = 0;
  size: number = 10;
  constructor(
    public dialog: MatDialog,
    private apiService: DiaFestivoService,
    private matSnackBar: MatSnackBar
  ) { }

  onLoadTableDiaFestivo() {
    this.apiService.listDiaFestivo(this.pagina, this.size).subscribe((resp) => {
      if (resp) {
        console.log("onLoadTableDiaFestivo: " , resp);
        this.tableDiaFestivo = resp;
      }
    });
  }
  onAddDiaFestivo() {
    const dialogRef = this.dialog.open(RegistroDiaFestivoComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableDiaFestivo();
      }
    });
  }
  onChangePagination(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.size = event.pageSize;
    this.apiService.listDiaFestivo(this.pagina, this.size).subscribe((resp) => {
      this.tableDiaFestivo = resp;
    });
  }
  onEditDiaFestivo(data: IDiaFestivo) {
    const dialogRef = this.dialog.open(RegistroDiaFestivoComponent, {
      width: '500px',
      data: data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableDiaFestivo();
      }
    });
  }
  onDeleteDiaFestivo(idDiaFestivo: number) {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: '400px',
      data: {
        title: 'Eliminar dia festivo registrado',
        message: '¿esta seguro de eliminar este dia festivo?'
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.deleteDiaFestivo(idDiaFestivo).subscribe((resp) => {
          this.onLoadTableDiaFestivo();
        });
      }
    });
  }
  ngOnInit(): void {
    this.onLoadTableDiaFestivo();
  }


}
