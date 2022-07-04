import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportesService } from '../service/reporte.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';  

@Component({
  selector: 'app-filtro-reporte',
  templateUrl: './filtro-reporte.component.html',
  styleUrls: ['./filtro-reporte.component.scss']
})
export class FiltroReporteComponent implements OnInit  {

  
  form : FormGroup;
  mensaje: string = "";

 constructor(
    public dialogRef: MatDialogRef<FiltroReporteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ReportesService,
    private matSnackBar: MatSnackBar

  ) {
    this.builform();
   }

  ngOnInit(): void {
    console.log('data', this.data);
  }

  private builform(): void{
    this.form = new FormGroup({
      idSede : new FormControl(null),
      idTurno: new FormControl(null),
      tipoHora: new FormControl(null)
    })
  }

  onGenerarReporte(){
    const filter = {
      idsede :  0,
      idturno: 0,
      tipohora: 'HEXT',
    }  
     
    this.apiService.repHorasTrabajo(filter).subscribe((resp) => { 
      console.log('resp', resp);
      if(resp){  
        this.onDescargarExcel(resp.data);
      }    
    }) 

    // this.apiService.repGeneral(filter).subscribe((resp) => { 
    //   console.log('resp', resp);
    //   if(resp){  
    //     this.onDescargarExcel(resp.data);
    //   }    
    // }) 
  }

 
  onDescargarExcel(listado){   
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(listado);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer,  "Reporte.xlsx"); 
  }
  
  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
    FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + '.xlsx');
  }


}
