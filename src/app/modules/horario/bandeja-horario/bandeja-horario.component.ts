import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { GeneralPage } from 'app/shared/interface-paginator';
import { IHorario } from '../interface/horario';
import { RegistroHorarioComponent } from '../registro-horario/registro-horario.component';
import { HorarioService } from '../service/horario.service';

@Component({
  selector: 'app-bandeja-horario',
  templateUrl: './bandeja-horario.component.html',
  styleUrls: ['./bandeja-horario.component.scss']
})
export class BandejaHorarioComponent implements OnInit {

  displayedColumnsHorario: string[] = ['nombre', 'horaInicio', 'horaFin', 'accion'];
  dataSourceHorario: any[];

  tableHorario: GeneralPage;

  nombreHorario: string = '';
  pagina: number = 0;
  size: number = 10;

  constructor(
    public dialog: MatDialog,
    private apiService: HorarioService,
    private _fuseConfirmationService: FuseConfirmationService
  ) { }

  ngOnInit(): void {
    this.onLoadTableHorario();
  }

  onRefresh() {
    this.nombreHorario = '';
    this.onLoadTableHorario();
  }

  onAddHorario() {
    const dialogRef = this.dialog.open(RegistroHorarioComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableHorario();
      }
    });
  }

  onLoadTableHorario() {
    this.apiService.listHorario(this.pagina, this.size, this.nombreHorario).subscribe((resp: any) => {
      if (resp) {
        this.tableHorario = resp.data;
      }
    });
  }

  onChangePagination(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.size = event.pageSize;

    this.apiService.listHorario(this.pagina, this.size, this.nombreHorario).subscribe((resp: any) => {
      this.tableHorario = resp.data;
    });
  }


  onEditHorario(data: IHorario) {
    const dialogRef = this.dialog.open(RegistroHorarioComponent, {
      width: '400px',
      data: data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableHorario();
      }
    });
  }

  onDeleteHorario(idHorario: number) {
    const dialogRef = this._fuseConfirmationService.delete();

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'confirmed') {
        this.apiService.deleteHorario(idHorario).subscribe((resp) => {
          this.onLoadTableHorario();
        });
      }
    });
  }

}
