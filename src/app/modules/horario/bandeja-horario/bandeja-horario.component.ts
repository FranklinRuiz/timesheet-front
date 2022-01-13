import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalDeleteComponent } from 'app/shared/modal-delete/modal-delete.component';
import { HorarioPage, IHorario } from '../interface/horario';
import { RegistroHorarioComponent } from '../registro-horario/registro-horario.component';
import { HorarioService } from '../service/horario.service';

@Component({
  selector: 'app-bandeja-horario',
  templateUrl: './bandeja-horario.component.html',
  styleUrls: ['./bandeja-horario.component.scss']
})
export class BandejaHorarioComponent implements OnInit {

  displayedColumnsHorario: string[] = ['idHorario', 'horaInicio', 'horaFin', 'accion'];
  dataSourceHorario: any[];

  tableHorario: HorarioPage;

  pagina: number = 0;
  size: number = 10;

  constructor(
    public dialog: MatDialog,
    private apiService: HorarioService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.onLoadTableHorario();
  }

  onAddHorario() {
    const dialogRef = this.dialog.open(RegistroHorarioComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableHorario();
      }
    });
  }

  onLoadTableHorario() {
    this.apiService.listHorario(this.pagina, this.size).subscribe((resp:any) => {
      if (resp) {
        this.tableHorario = resp.data;
      }
    });
  }

  onChangePagination(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.size = event.pageSize;

    this.apiService.listHorario(this.pagina, this.size).subscribe((resp:any) => {
      this.tableHorario = resp.data;
    });
  }


  onEditHorario(data: IHorario) {
    const dialogRef = this.dialog.open(RegistroHorarioComponent, {
      width: '500px',
      data: data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableHorario();
      }
    });
  }

  onDeleteHorario(idHorario: number) {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: '400px',
      data: {
        title: 'Eliminar horario registrado',
        message: '¿esta seguro de eliminar este horario?'
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.deleteHorario(idHorario).subscribe((resp) => {
          this.onLoadTableHorario();
        });
      }
    });
  }

}
