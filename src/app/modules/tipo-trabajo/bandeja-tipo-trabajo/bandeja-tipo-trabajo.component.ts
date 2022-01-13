import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ModalDeleteComponent } from 'app/shared/modal-delete/modal-delete.component';
import { ITipoTrabajo, TipoTrabajoPage } from '../interfaces/tipo-trabajo';
import { RegistroTipoTrabajoComponent } from '../registro-tipo-trabajo/registro-tipo-trabajo.component';
import { TipoTrabajoService } from '../services/tipo-trabajo.service';

@Component({
  selector: 'app-bandeja-tipo-trabajo',
  templateUrl: './bandeja-tipo-trabajo.component.html',
  styleUrls: ['./bandeja-tipo-trabajo.component.scss']
})
export class BandejaTipoTrabajoComponent implements OnInit {

  displayedColumnsTipoTrabajo : string[] = ['idTipoTrabajo', 'abreviatura', 'nombreTipoTrabajo', 'accion'];
  dataSourceTipoTrabajo: any[];

  tabletipoTrabajo : TipoTrabajoPage;
  pagina: number = 0;
  size: number = 10;

  constructor(
    public dialog : MatDialog,
    private apiService : TipoTrabajoService
  ) { }
 
  ngOnInit(): void {
    this.onLoadTableTipoTrabajo();
  }


  onLoadTableTipoTrabajo(){
    this.apiService.listTipoTrabajo(this.pagina, this.size).subscribe((resp) => {
      console.log('resp de tipo trabajo', resp);
      this.tabletipoTrabajo = resp.data;
    })
  }

  onChangePagination(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.size = event.pageSize;

    this.apiService.listTipoTrabajo(this.pagina, this.size).subscribe((resp) => {
      this.tabletipoTrabajo = resp.data;
    });
  }

  onAddTipoTrabajo(){
    const dialgoref = this.dialog.open(RegistroTipoTrabajoComponent,{
      width: '500px'
    }); 

    dialgoref.afterClosed().subscribe((resp) => {
      if(resp){
        this.onLoadTableTipoTrabajo();
      }
    })
  }


  onEditTipoTrabajo(data: ITipoTrabajo) {
    console.log('que vamos a editar', data);
    console.log('que vamos a  editar idTipoTrabajo', data.idTipoTrabajo);
    const dialogRef = this.dialog.open(RegistroTipoTrabajoComponent, {
      width: '500px',
      data: data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableTipoTrabajo();
      }
    });
  }


  onDeleteTipoTrabajo(idTipoTrabajo: number) {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: '400px',
      data: {
        title: 'Eliminar tipo trabajo registrado',
        message: '¿esta seguro de eliminar este tipo de trabajo?'
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.deleteTipoTrabajo(idTipoTrabajo).subscribe((resp) => {
          this.onLoadTableTipoTrabajo();
        });
      }
    });
  }




}
