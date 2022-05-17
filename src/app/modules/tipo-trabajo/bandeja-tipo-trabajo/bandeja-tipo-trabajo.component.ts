import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { GeneralPage } from 'app/shared/interface-paginator';
import { ITipoTrabajo } from '../interfaces/tipo-trabajo';
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
 
  tableTipoTrabajo: GeneralPage;

  nombreTipoTrabajo : string ="";
  pagina: number = 0;
  size: number = 10;

  constructor(
    public dialog : MatDialog,
    private apiService : TipoTrabajoService,
    private _fuseConfirmationService: FuseConfirmationService
  ) { }
 
  ngOnInit(): void {
    this.onLoadTableTipoTrabajo();
  }

  onRefresh() {
    this.nombreTipoTrabajo = '';
    this.onLoadTableTipoTrabajo();
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

  onLoadTableTipoTrabajo(){
    this.apiService.listTipoTrabajo(this.pagina, this.size, this.nombreTipoTrabajo).subscribe((resp) => {
      console.log('resp de tipo trabajo', resp.data);
      this.tableTipoTrabajo = resp.data;
    })
  }
 

  onChangePagination(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.size = event.pageSize;

    this.apiService.listTipoTrabajo(this.pagina, this.size, this.nombreTipoTrabajo).subscribe((resp: any) => {
      this.tableTipoTrabajo = resp.data;
    });
  }



  onEdit(data: ITipoTrabajo) { 
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


 
  onDelete(idTipoTrabajo: number) {
      const dialogRef = this._fuseConfirmationService.delete();
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result == 'confirmed') {
          this.apiService.deleteTipoTrabajo(idTipoTrabajo).subscribe((resp) => {
            this.onLoadTableTipoTrabajo();
          });
        }
      });
    }



}
