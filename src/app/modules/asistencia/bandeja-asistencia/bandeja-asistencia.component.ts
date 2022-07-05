import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DiaFestivoPage } from 'app/modules/dia-festivo/interface/dia-festivo';
import { GeneralPage } from 'app/shared/interface-paginator';
import { AsistenciaService } from '../service/asistencia.service';

@Component({
  selector: 'app-bandeja-asistencia',
  templateUrl: './bandeja-asistencia.component.html',
  styleUrls: ['./bandeja-asistencia.component.scss']
})
export class BandejaAsistenciaComponent implements OnInit {

  displayedColumns: string[] = ['empleado', 'tipoTrabajo', 'horaEntrada', 'horaSalida', 'fecha'];
  dataSource: any[];
  tableAsistencia: GeneralPage;

  pagina: number = 0;
  size: number = 10;

  constructor(
    public dialog: MatDialog,
    private apiService: AsistenciaService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.onLoadTableAsistencia()
  }

  onLoadTableAsistencia() {
    this.apiService.listAsistencia(this.pagina, this.size).subscribe((resp: any) => {
      if (resp) {
        this.tableAsistencia = resp.data;
      }
    });
  }


}
